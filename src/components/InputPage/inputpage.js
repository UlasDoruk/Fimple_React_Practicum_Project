import { NavLink } from "react-router-dom";
import Buttons from "../Buttons/Buttons"
import "./Inputpage.css"

function InputPage() {
  return (
    <div className="container">
      <div className="card">
        <Buttons />
        <input placeholder="Credit Amount" type="number"></input>
        <input placeholder="Installment Amount" type="number"></input>
        <input placeholder="Profit Rate" type="number"></input>
        <input placeholder="Tax (BSMV)" type="number"></input>
        <input placeholder="Tax (KKDF)" type="number"></input>
        <NavLink to={"/Table"}>
          <button className="btn btn-success">Show Payment Table</button>
        </NavLink>
      </div>
    </div>
  );
}

export default InputPage