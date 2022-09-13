import { createContext, useState } from "react";

const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {

  const [flag, setFlag] = useState(false);
  const [weekly,setWeekly] = useState(false);
  const [monthly,setMonthly] = useState(false);
  const [annual,setAnnual] = useState(false);
  const [compound,setCompound] = useState(false)

  const ContaineReset = () => {
    setFlag(false)
    setWeekly(false);
    setMonthly(false);
    setAnnual(false);
    setCompound(false);
  };


  const values = {
    flag,setFlag,weekly,setWeekly,monthly,setMonthly,annual,setAnnual,compound,setCompound,ContaineReset
  };

  return (
    <ContainerContext.Provider value={values}>{children}</ContainerContext.Provider>
  );
};

export default ContainerContext;
