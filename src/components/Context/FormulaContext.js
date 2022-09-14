import { createContext,useContext,useState } from "react";
import ContainerContext from "./ContainerContext"

const FormulaContext = createContext();

export const FormulaProvider = ({ children }) => {

    const [formula,setFormula] = useState(0)
    const {weekly,annual,compound} = useContext(ContainerContext)

    const CalculationToFormula =(remain,profit)=>{
       if (compound === true) {
        if (weekly === true) {
          return parseFloat(remain * (Math.pow((1 +profit),( 0,23)))-remain).toFixed(2);
        } else if (annual === true) {
          return parseFloat(remain * (Math.pow((1 +profit), (12,16)))).toFixed(2)
        } else {
          return parseFloat(remain * (Math.pow((1 +profit),1))-remain).toFixed(2);
        }
      } else if (compound === false) {
        if (weekly === true) {
          return parseFloat(remain * (profit * (0,23))).toFixed(2);
        } else if (annual === true) {
          return parseFloat(remain * (profit * (12,16))).toFixed(2);
        } else {
          return parseFloat(remain * (profit * (1))).toFixed(2);
        }
      }
    }

  const values = {formula,setFormula,CalculationToFormula};

  return (
    <FormulaContext.Provider value={values}>{children}</FormulaContext.Provider>
  );
};

export default FormulaContext;
