import "./Navbar.css"
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark">
        <NavLink className="navbar-brand" to={"/"} style={{ color: "inherit" }}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQFJODlNe80N1Q/company-logo_200_200/0/1648554411362?e=1670457600&v=beta&t=_4s8PtWmnC4i2Xta5BvrZuk-FCbis4AkejHr930tWVg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          ></img>
          <p className="Navbar-text">Fimple React Practicum</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
