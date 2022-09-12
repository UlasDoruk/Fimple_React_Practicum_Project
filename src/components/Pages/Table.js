import "./Table.css"
import ResetButton from "../Buttons/ResetButton";
import React, { useContext } from "react";
import InputContext from "../Context/InputContext"

function Table() {
  const { credit } = useContext(InputContext);
  const { profit } = useContext(InputContext);
  const { installment } = useContext(InputContext);
  const { kkdf } = useContext(InputContext);
  const { bsmv } = useContext(InputContext);
  
  let newinstallment = parseInt(installment);
  let remain = credit;

  const newarr = [];
  Array(newinstallment)
    .fill(0)
    .forEach((x, i) => {
      newarr.push(i + 1);
    });

  const price = (
    (credit *
      (profit + kkdf + bsmv) *
      Math.pow(profit + kkdf + bsmv + 1, installment)) /
    (Math.pow(profit + kkdf + bsmv + 1, installment) - 1)
  ).toFixed(2);

  const renderTable = () => {
    return (
      <React.Fragment>
        {newarr.map((num, index) => {
          const newprofit = parseFloat(remain * profit).toFixed(2);
          const newbsmv = parseFloat(remain * bsmv).toFixed(2);
          const newkkdf = parseFloat(remain * kkdf).toFixed(2);
          const main = parseFloat(
            price - newprofit - newbsmv - newkkdf
          ).toFixed(2);
          remain = parseFloat(remain-main).toFixed(2)
          return (
            <tr key={index}>
              <th scope="row">{num}</th>
              <td>{price}</td>
              <td>{main}</td>
              <td>{remain}</td>
              <td>{newprofit}</td>
              <td>{newkkdf}</td>
              <td>{newbsmv}</td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  };

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
        <tbody>{renderTable()}</tbody>
      </table>
      <ResetButton/>
    </div>
  );
}

export default Table