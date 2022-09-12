import {NavLink} from "react-router-dom"

function Paymentbtn() {

  return (
    <div>
      <NavLink to={"/Table"}>
        <button className="btn btn-success">Show The Payment Table</button>
      </NavLink>
    </div>
  );
}

export default Paymentbtn