import { useContext } from "react";
import ContainerContext from "../Context/ContainerContext";
import "./Buttons.css"

function Buttons() {

  const {weekly,setWeekly} = useContext(ContainerContext);
  const {monthly,setMonthly} = useContext(ContainerContext);
  const {annual,setAnnual} = useContext(ContainerContext);

  return (
    <div className=" buttons">
      <p className="homepage-text">PLEASE CHOOSE YOUR PAYMENT METHOD</p>
      <button
        className="btn btn-danger weekly"
        onClick={() => setWeekly(weekly === true ? false : true)}
      >
        WEEKLY
      </button>
      <button
        className="btn btn-danger monthly"
        onClick={() => setMonthly(monthly === true ? false : true)}
      >
        MONTHLY
      </button>
      <button
        className="btn btn-danger annual"
        onClick={() => setAnnual(annual === true ? false : true)}
      >
        ANNUAL
      </button>
    </div>
  );
}

export default Buttons