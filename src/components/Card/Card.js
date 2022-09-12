import "./Card.css"
import { useContext } from "react";
import InputContext from "../Context/InputContext";

function Card() {

    const {installment} = useContext(InputContext)
    const {price} = useContext(InputContext)

    const totalInstallment = parseFloat(installment * price).toFixed(2)

  return (
    <div className="card total">
      <p className="cardtext">Installment Amount : {price}</p>
      <p className="cardtext">Total Repayment : {totalInstallment}</p>
    </div>
  );
}

export default Card