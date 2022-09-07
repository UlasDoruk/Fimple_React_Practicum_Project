import { createContext,useState } from "react";

const InputContext = createContext()

export const InputProvider = ({children}) =>{
    const [credit,setCredit] = useState("")
    const [installment,setInstallment] = useState("")
    const [profit,setProfit] = useState("")
    const [kkdf,setKkdf] = useState("")
    const [bsmv,setBsmv] = useState("")

    const values = {
      credit,
      setCredit,
      installment,
      setInstallment,
      profit,
      setProfit,
      kkdf,
      setKkdf,
      bsmv,
      setBsmv,
    };

    return <InputContext.Provider value={values}>{children}</InputContext.Provider>
}

export default InputContext