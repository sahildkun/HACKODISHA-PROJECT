import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

  const { loginWithRedirect } = useAuth0();

    return ( 

      <nav className="navbar">
         <h1>PROJECTNAME</h1>
      <div className="links">
        <a href="#"> login</a>
         <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
   </nav>
     );
}
 
export default  Navbar ;