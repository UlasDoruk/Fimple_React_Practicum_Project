import "./Table.css"
import ResetButton from "../Buttons/ResetButton";
import { useContext } from "react";

function Table() {
  return (
    <div className="container">
      <table class="table table-dark">
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <ResetButton />
    </div>
  );
}

export default Table