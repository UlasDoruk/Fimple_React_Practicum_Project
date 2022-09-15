import { createContext,useState } from "react";

const InputContext = createContext()

export const InputProvider = ({ children }) => {
  // Kullanıcının girdiği değerleri burda tutup diğer componentlere dağıtıyoruz
  const [credit, setCredit] = useState("");
  const [installment, setInstallment] = useState("");
  const [profit, setProfit] = useState("");
  const [kkdf, setKkdf] = useState("");
  const [bsmv, setBsmv] = useState("");
  // Taksit tutarını hesaplayan sabit price değeri
  const price = (parseFloat((credit *
      (profit + kkdf + bsmv) *
      Math.pow(profit + kkdf + bsmv + 1, installment)) /
    (Math.pow(profit + kkdf + bsmv + 1, installment) - 1)
  ).toFixed(2))
  // reset butonuna tıklandığında state'lerin değerini sıfırlayan fonksiyon
  const handleReset = ()=>{
    setCredit("");
    setProfit("");
    setKkdf("");
    setBsmv("");
    setInstallment("")
  }
  // Provider'e toplu olarak geçilen değerler
  const values = {
    credit,setCredit,installment,setInstallment,profit,setProfit,kkdf,setKkdf,
    bsmv,setBsmv,handleReset,price
  };

  return (
    <InputContext.Provider value={values}>{children}</InputContext.Provider>
  );
};

export default InputContext