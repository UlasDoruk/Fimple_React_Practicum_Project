import ContainerContext from "../Context/ContainerContext";
import {useContext} from "react"
import "./Selected.css"

function Selected() {
  const { weekly, monthly, annual, simple, compound } =
    useContext(ContainerContext);
  // Haftalık, aylık ya da yıllık taksit aralığı seçeneği seçildiğinde diğer seçeneklerin false değeri almasını sağlayan fonksiyon
  function InvesmentWriter() {
    if (weekly === true) {
      return "Weekly";
    } else if (monthly === true) {
      return "Monthly";
    } else if (annual === true) {
      return "Annual";
    }
  }
  // Basit ya da bileşik ödeme seçeneği seçildiğinde diğer seçeneğin false değeri almasını sağlayan fonksiyon
  function InterestWriter() {
    if (simple === true) {
      return "Simple";
    } else if (compound === true) {
      return "Compound";
    }
  }

  return (
    <div className="card selected">
      <h3 className="selected text">
        Invesment Interval : {InvesmentWriter()}
      </h3>
      <h3 className="selected text">Interest Type : {InterestWriter()}</h3>
    </div>
  );
}

export default Selected