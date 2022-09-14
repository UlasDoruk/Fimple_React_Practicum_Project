import ContainerContext from "../Context/ContainerContext";
import "../Buttons/InterestButton.css"
import { useContext } from "react";

function InterestButton() {

    const { simple, setSimple, compound, setCompound } = useContext(ContainerContext);

  return (
    <div className="ınterestbtn">
      <button
        className="btn btn-dark"
        onClick={() => setSimple(simple === true ? false : true)}
      >
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