import { createContext,useState } from "react";

const InputContext = createContext()

export const InputProvider = ({ children }) => {

  const [credit, setCredit] = useState("");
  const [installment, setInstallment] = useState("");
  const [profit, setProfit] = useState("");
  const [kkdf, setKkdf] = useState("");
  const [bsmv, setBsmv] = useState("");

  const price = (parseFloat((credit *
      (profit + kkdf + bsmv) *
      Math.pow(profit + kkdf + bsmv + 1, installment)) /
    (Math.pow(profit + kkdf + bsmv + 1, installment) - 1)
  ).toFixed(2))
    
  const handleReset = ()=>{
    setCredit("");
    setProfit("");
    setKkdf("");
    setBsmv("");
    setInstallment("")
  }

  const values = {
    credit,setCredit,installment,setInstallment,profit,setProfit,kkdf,setKkdf,
    bsmv,setBsmv,handleReset,price
  };

  return (
    <InputContext.Provider value={values}>{children}</InputContext.Provider>
  );
};

export default InputContext