import { createContext, useState } from "react";

const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {

  const [flag, setFlag] = useState(false);
  const [weekly,setWeekly] = useState(false);
  const [monthly,setMonthly] = useState(false);
  const [annual,setAnnual] = useState(false);

  const values = {
    flag,setFlag,weekly,setWeekly,monthly,setMonthly,annual,setAnnual
  };

  return (
    <ContainerContext.Provider value={values}>{children}</ContainerContext.Provider>
  );
};

export default ContainerContext;
