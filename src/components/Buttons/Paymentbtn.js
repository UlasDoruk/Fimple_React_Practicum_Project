import {NavLink} from "react-router-dom"

function Paymentbtn() {

  // Table butonuna tıkladığımızda router sayesinde tablonun olduğu sayfaya yönlendiriyor
  return (
    <div>
      <NavLink to={"/Table"}>
        <button className="btn btn-success">Show The Payment Table</button>
      </NavLink>
    </div>
  );
}

export default Paymentbtn