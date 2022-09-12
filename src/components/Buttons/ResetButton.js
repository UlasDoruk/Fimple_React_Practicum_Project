import { useContext } from "react";
import {NavLink} from "react-router-dom"
import InputContext from "../Context/InputContext";

function ResetButton() {

  const {handleReset} = useContext(InputContext)

  return (
    <div className="resetbtn">
      <NavLink to={"/"} onClick={handleReset}>
        <button className="btn btn-success">RESET</button>
      </NavLink>
    </div>
  );
}

export default ResetButton