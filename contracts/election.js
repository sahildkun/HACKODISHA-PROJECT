const { Client, ContractCreateTransaction, ContractFunctionParameters} = require("@hashgraph/sdk");
require("dotenv").config();
const {web3 } = require("web3")

function byte(){
    let strarr = ["302a300506032b6570032100d24979b26959f17228f5a6031ca24d61eb0ecb655aa3e91b47383349c06463a6", "302a300506032b657003210071e5b7eb111e28562877ddb3661899a05ac77effb259cb93b8eb133d53527444"]
    let arr = [];
    strarr.forEach(ele => {
        arr.push(web3.fromAscii(ele, 32))
    });
    return arr;
}

async function main() {

    //Grab your Hedera testnet account ID and private key from your .env file
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;

    // If we weren't able to grab it, we should throw a new error
    if (myAccountId == null ||
        myPrivateKey == null ) {
        throw new Error("Environment variables myAccountId and myPrivateKey must be present");
    }

    // Create our connection to the Hedera network
    // The Hedera JS SDK makes this really easy!
    const client = Client.forTestnet();

    client.setOperator(myAccountId, myPrivateKey);

    const contractInstantiateTx = new ContractCreateTransaction()
	.setBytecodeFileId("0.0.48220621")
	.setGas(100000)
	.setConstructorParameters(new ContractFunctionParameters().addByteArray(byte()));

    const contractInstantiateSubmit = await contractInstantiateTx.execute(client);
    const contractInstantiateRx = await contractInstantiateSubmit.getReceipt(client);
    const contractId = contractInstantiateRx.contractId;
    const contractAddress = contractId.toSolidityAddress();
    console.log(`- The smart contract ID is: ${contractId} \n`);
    console.log(`- Smart contract ID in Solidity format: ${contractAddress} \n`);

}
main();