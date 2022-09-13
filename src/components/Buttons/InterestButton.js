import ContainerContext from "../Context/ContainerContext";
import "../Buttons/InterestButton.css"
import { useContext } from "react";

function InterestButton() {

    const  {compound, setCompound} = useContext(ContainerContext);

  return (
    <div className="ınterestbtn">
      <button
        className="btn btn-dark">
        Simple Interest
      </button>
      <button
        className="btn btn-dark"
        onClick={() => setCompound(compound === true ? false : true)}
      >
        Compound Interest
      </button>
    </div>
  );
}

export default InterestButton