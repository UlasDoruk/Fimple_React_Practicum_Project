import "./Table.css"
import ResetButton from "../Buttons/ResetButton";
import Card from "../Card/Card"
import React, { useContext } from "react";
import InputContext from "../Context/InputContext"
import ContainerContext from "../Context/ContainerContext";
import FormulaContext from "../Context/FormulaContext";
import TotalButton from "../Buttons/TotalButton";

function Table() {

  const { credit,profit,installment,kkdf,bsmv,price } = useContext(InputContext);
  const { flag } = useContext(ContainerContext);
  const {CalculationToFormula} = useContext(FormulaContext)
  // Taksit sayısını float'a çeviren değer
  let newinstallment = parseInt(installment);
  // ilk remain değerini kullanıcının girdiği anapara değerine eşitliyoruz
  let remain = credit;
  // Tabloda kaç adet satır olacağını belirleyen array
  const newarr = [];
  Array(newinstallment ? newinstallment : 1)
    .fill(0)
    .forEach((x, i) => {
      newarr.push(i + 1);
    });

  const renderTable = () => {
    return (
      <React.Fragment>
        {newarr.map((num, index) => {
          // newarr listesini map ile elemanlarına erişerek istenilen sütünların verilerini oluşturuyoruz
          const newprofit = CalculationToFormula(remain,profit)
          const newbsmv = parseFloat(remain * bsmv).toFixed(2);
          const newkkdf = parseFloat(remain * kkdf).toFixed(2);
          const main = parseFloat(price - newprofit - newbsmv - newkkdf).toFixed(2);
          remain = parseFloat(remain - main).toFixed(2);
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
      <h1>Repayment Plan</h1>
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
        {/* Önceden oluştruduğumuz tablodaki satırlara gelicek verileri burada çağırıyoruz */}
        <tbody>{renderTable()}</tbody>
      </table>
      {/* flag değeri true olursa Card componenti çalışacak */}
      {flag === true ? <Card /> : ""}
      <div className="tablebtn">
        <TotalButton />
        <ResetButton />
      </div>
    </div>
  );
}

export default Table