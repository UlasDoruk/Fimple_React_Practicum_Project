import { createContext,useState } from "react";

const InputContext = createContext()

export const InputProvider = ({ children }) => {

  const [credit, setCredit] = useState("");
  const [installment, setInstallment] = useState("");
  const [profit, setProfit] = useState("");
  const [kkdf, setKkdf] = useState("");
  const [bsmv, setBsmv] = useState("");
  const [flag,setFlag] = useState(false)

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
  }

  const values = {
    credit,setCredit,installment,setInstallment,profit,setProfit,kkdf,setKkdf,
    bsmv,setBsmv,handleReset,flag,setFlag,price
  };

  return (
    <InputContext.Provider value={values}>{children}</InputContext.Provider>
  );
};

export default InputContext