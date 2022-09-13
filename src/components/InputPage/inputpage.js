import Buttons from "../Buttons/Buttons"
import "./Inputpage.css"
import InputContext from "../Context/InputContext";
import ContainerContext from "../Context/ContainerContext";
import { useContext} from "react";
import Paymentbtn from "../Buttons/Paymentbtn";
import InterestButton from "../Buttons/InterestButton";

function InputPage() {
  const { credit, setCredit } = useContext(InputContext);
  const { installment, setInstallment } = useContext(InputContext);
  const { profit, setProfit } = useContext(InputContext);
  const { kkdf, setKkdf } = useContext(InputContext);
  const { bsmv, setBsmv } = useContext(InputContext);
  const { weekly } = useContext(ContainerContext);
  const { monthly} = useContext(ContainerContext);
  const { annual } = useContext(ContainerContext);

  function Credit(e) {
    setCredit(e.target.value);
  }

  function Installment(e) {
    setInstallment(e.target.value);
  }

  function Profit(e) {
    if(weekly === true){
      setProfit(e.target.value /100 * 4)
    }else if(monthly ===  true){
      setProfit(e.target.value / 100 );
    }else if(annual === true){
      setProfit(e.target.value / 100 / 12);
    }else{
      setProfit(e.target.value / 100)
    }
  }

  function KKDF(e) {
    setKkdf(e.target.value / 100);
  }

  function BSMV(e) {
    setBsmv(e.target.value / 100);
  }

  return (
    <div className="container">
      <div className="card input">
        <Buttons />
        <InterestButton />
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
        <input placeholder="Tax % (BSMV)" type="number" onChange={BSMV}></input>
        <input placeholder="Tax % (KKDF)" type="number" onChange={KKDF}></input>
        {credit && installment && profit && kkdf && bsmv ? <Paymentbtn /> : ""}
      </div>
    </div>
  );
}

export default InputPage