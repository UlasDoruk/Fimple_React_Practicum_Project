import {NavLink} from "react-router-dom"

function ResetButton() {
  return (
    <div className="resetbtn">
      <NavLink to={"/"}>
        <button className="btn btn-success">Reset</button>
      </NavLink>
    </div>
  );
}

export default ResetButton