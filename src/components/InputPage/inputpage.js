import Buttons from "../Buttons/Buttons"
import "./Inputpage.css"
import ContainerContext from "../Context/ContainerContext";
import InputContext from "../Context/InputContext";
import {  useContext} from "react";
import Paymentbtn from "../Buttons/Paymentbtn";
import InterestButton from "../Buttons/InterestButton";
import Selected from "../Selected/Selected";


function InputPage() {

  const { credit,setCredit,installment,setInstallment,profit,setProfit,kkdf,setKkdf,bsmv,setBsmv,} = useContext(InputContext);
  const {weekly,monthly,annual,simple,compound} = useContext(ContainerContext)
  // Kullanıcıdan alınan verileri Inputcontext'e gönderen fonksiyonlar
  function Credit(e) {
    setCredit(e.target.value);
  }

  function Installment(e) {
    setInstallment(e.target.value);
  }

  function Profit(e) {
    setProfit(e.target.value / 100);
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
        {/* ContainerContext verilerinden herhangi biri true değerini aldığında Selected componenti devreye giriyor */}
        {weekly || annual || monthly || simple || compound ? <Selected /> : ""}
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
          placeholder="Profit Rate %"
          type="number"
          onChange={Profit}
        ></input>
        <input placeholder="Tax % (BSMV)" type="number" onChange={BSMV}></input>
        <input placeholder="Tax % (KKDF)" type="number" onChange={KKDF}></input>
        {/* InputContext verilerinden hepsi true değerini aldığında Paymentbtn componenti devreye giriyor */}
        {(credit && installment && profit && kkdf && bsmv) !== "" ? (<Paymentbtn />) : ("")}
      </div>
    </div>
  );
}

export default InputPage