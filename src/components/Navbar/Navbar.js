import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark">
        <a className="navbar-brand" href="#" style={{ color: "inherit" }}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQFJODlNe80N1Q/company-logo_200_200/0/1648554411362?e=1670457600&v=beta&t=_4s8PtWmnC4i2Xta5BvrZuk-FCbis4AkejHr930tWVg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          ></img>
          <p className="Navbar-text">Fimple React Practicum</p>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
