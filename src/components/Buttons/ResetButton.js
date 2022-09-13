import { useContext } from "react";
import {NavLink} from "react-router-dom"
import ContainerContext from "../Context/ContainerContext";
import InputContext from "../Context/InputContext";

function ResetButton() {

  const {handleReset} = useContext(InputContext)
  const {ContaineReset} = useContext(ContainerContext)

  return (
    <div className="resetbtn">
      <NavLink to={"/"} onClick={(handleReset,ContaineReset)}>
        <button className="btn btn-success">RESET</button>
      </NavLink>
    </div>
  );
}

export default ResetButton