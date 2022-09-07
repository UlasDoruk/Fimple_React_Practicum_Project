import { createContext, useContext } from "react";
import InputContext from "./InputContext";

const FormulaContext = createContext();

export const FormulaProvider = ({ children }) => {

    const { credit } = useContext(InputContext);
    const { profit } = useContext(InputContext);
    const { installment } = useContext(InputContext);
    const { kkdf } = useContext(InputContext);
    const { bsmv } = useContext(InputContext);
  

  const values = {
    
  };

  return (
    <FormulaContext.Provider value={values}>{children}</FormulaContext.Provider>
  );
};

export default FormulaContext;
