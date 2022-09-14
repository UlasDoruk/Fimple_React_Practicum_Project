import { useContext } from "react";
import ContainerContext from "../Context/ContainerContext";
import "./Buttons.css"

function Buttons() {

  const { weekly, setWeekly, monthly, setMonthly, annual, setAnnual} = useContext(ContainerContext);

  

  return (
    <div className=" buttons">
      <h4 className="homepage-text">PLEASE CHOOSE YOUR PAYMENT METHOD</h4>
      <button
        className="btn btn-danger"
        onClick={() => (setWeekly(weekly === true ? false : true))}
      >
        WEEKLY
      </button>
      <button
        className="btn btn-danger"
        onClick={() => (setMonthly(monthly === true ? false : true))}
      >
        MONTHLY
      </button>
      <button
        className="btn btn-danger"
        onClick={() => ( setAnnual(annual === true ? false : true))}
      >
        ANNUAL
      </button>
    </div>
  );
}

export default Buttons;