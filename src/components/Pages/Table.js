import "./Table.css"
import ResetButton from "../Buttons/ResetButton";
import { useContext } from "react";
import InputContext from "../Context/InputContext"

function Table() {

  const { credit } = useContext(InputContext);
  const { profit } = useContext(InputContext);
  const { installment } = useContext(InputContext);
  const { kkdf } = useContext(InputContext);
  const { bsmv } = useContext(InputContext);

  const newprofit = parseFloat(credit * profit).toFixed(2);
  const newkkdf = parseFloat(credit * kkdf).toFixed(2);
  const newbsmv = parseFloat(credit * bsmv).toFixed(2);
  const price = (
    (credit *
      (profit + kkdf + bsmv) *
      Math.pow(profit + kkdf + bsmv + 1, installment)) /
    (Math.pow(profit + kkdf + bsmv + 1, installment) - 1)
  ).toFixed(2);
  const main = parseFloat(price - newprofit - newbsmv - newkkdf).toFixed(2);
  const remain = (credit-main).toFixed(2)


  return (
    <div className="container">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Installment No</th>
            <th scope="col">Installment Price</th>
            <th scope="col">Main Money</th>
            <th scope="col">Remaining</th>
            <th scope="col">Profit Amount</th>
            <th scope="col">KKDF</th>
            <th scope="col">BSMV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{price}</td>
            <td>{main }</td>
            <td>{remain}</td>
            <td>{newprofit}</td>
            <td>{newkkdf}</td>
            <td>{newbsmv}</td>
          </tr>
        </tbody>
      </table>
      <ResetButton />
    </div>
  );
}

export default Table