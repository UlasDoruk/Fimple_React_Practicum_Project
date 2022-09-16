import "./Card.css"
import { useContext } from "react";
import InputContext from "../Context/InputContext";

function Card() {

    const {installment,price} = useContext(InputContext)
    // Tablonun altındaki Toplam borcu ve taksit tutarını gösteren kart'ın formülü
    const totalInstallment = parseFloat(installment * price).toFixed(2)

  return (
    <div className="card total">
      <p className="cardtext">Installment Amount : {price}</p>
      <p className="cardtext">Total Repayment : {totalInstallment}</p>
    </div>
  );
}

export default Card