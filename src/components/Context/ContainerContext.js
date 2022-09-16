import { createContext, useState } from "react";

const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {
  
  // Genel olarak 2 sayfadaki bütün butonlardan gelen değerlerin tutulduğu ve dağıtıldığı context 
  const [flag, setFlag] = useState(false);
  const [weekly,setWeekly] = useState(false);
  const [monthly,setMonthly] = useState(false);
  const [annual,setAnnual] = useState(false);
  const [simple,setSimple] = useState(false)
  const [compound,setCompound] = useState(false)

  // reset butonuna tıklandığında içindeki state'leri sıfırlayan fonksiyon
  const ContaineReset = () => {
    setFlag(false)
    setWeekly(false);
    setMonthly(false);
    setAnnual(false);
    setSimple(false)
    setCompound(false);
  };

  // Provider'e toplu olarak geçilen değerler
  const values = {
    flag,setFlag,weekly,setWeekly,monthly,setMonthly,annual,setAnnual,compound,setCompound,ContaineReset,simple,setSimple
  };

  return (
    <ContainerContext.Provider value={values}>{children}</ContainerContext.Provider>
  );
};

export default ContainerContext;
