import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

import Navbar from './Navbar';
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
