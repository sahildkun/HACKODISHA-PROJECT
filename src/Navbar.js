import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import {Link,useLocation} from "react-router-dom";

const Navbar = () => {

  const { loginWithRedirect } = useAuth0();
  let location = useLocation();
  useEffect(() => {
  }, [location])
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
            </li>
          </ul>
          <button className="btn btn-primary links" onClick={()=>loginWithRedirect()} aria-disabled="true">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;