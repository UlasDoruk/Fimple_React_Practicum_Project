import { NavLink } from "react-router-dom";
import Buttons from "../Buttons/Buttons"
import "./Inputpage.css"
import InputContext from "../Context/InputContext";
import { useContext} from "react";

function InputPage() {

  const {credit,setCredit} = useContext(InputContext)
  const {installment, setInstallment} = useContext(InputContext);
  const {profit, setProfit} = useContext(InputContext);
  const {kkdf, setKkdf} = useContext(InputContext);
  const {bsmv, setBsmv} = useContext(InputContext);

  function Credit(e){
    setCredit(e.target.value)
  }

  function Installment(e) {
    setInstallment(e.target.value);
  }

  function Profit(e) {
    setProfit((e.target.value)/100);
  }

  function KKDF(e) {
    setKkdf((e.target.value)/100);
  }

  function BSMV(e) {
    setBsmv((e.target.value)/100);
  }
 

  return (
    <div className="container">
      <div className="card">
        <Buttons />
        <input
          placeholder="Credit Amount"
          type="number"
          onChange={Credit}
        ></input>
        <input
          placeholder="Installment Amount"
          type="number"
          onChange={Installment}
        ></input>
        <input
          placeholder="Profit Rate"
          type="number"
          onChange={Profit}
        ></input>
        <input
          placeholder="Tax % (BSMV)"
          type="number"
          onChange={BSMV}
        ></input>
        <input
          placeholder="Tax % (KKDF)"
          type="number"
          onChange={KKDF}
        ></input>
        <NavLink to={"/Table"}>
          <button className="btn btn-success">Show The Payment Table</button>
        </NavLink>
      </div>
    </div>
  );
}

export default InputPage