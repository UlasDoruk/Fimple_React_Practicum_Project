import {NavLink} from "react-router-dom"

function Table() {
  return (
    <div>
     <NavLink to={"/"}><button className="btn btn-danger">Reset</button></NavLink>
    </div>
  )
}

export default Table