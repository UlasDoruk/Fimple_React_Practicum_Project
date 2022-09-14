import ContainerContext from "../Context/ContainerContext";
import "../Buttons/InterestButton.css"
import { useContext } from "react";

function InterestButton() {

    const { simple, setSimple, compound, setCompound } = useContext(ContainerContext);

    function ReverseToSimple (){
      setSimple(false)
    } 

    function ReverseToCompound (){
      setCompound(false)
    }

  return (
    <div className="ınterestbtn">
      <button
        className="btn btn-dark"
        onClick={() =>( ReverseToCompound(),setSimple(simple === true ? false : true))}
      >
        Simple Interest
      </button>
      <button
        className="btn btn-dark"
        onClick={() => (ReverseToSimple(),setCompound(compound === true ? false : true))}
      >
        Compound Interest
      </button>
    </div>
  );
}

export default InterestButton