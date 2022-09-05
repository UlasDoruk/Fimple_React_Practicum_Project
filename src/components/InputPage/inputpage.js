import "./Inputpage.css"

function InputPage() {
  return (
        <div className="container">
          <div className="card">
            <input placeholder="Credit Amount" type="number"></input>
            <input placeholder="Installment Amount" type="number"></input>
            <input placeholder="Profit Rate" type="number"></input>
            <input placeholder="Tax (BSMV)" type="number"></input>
            <input placeholder="Tax (KKDf)" type="number"></input>
            <p className="homepage-text">PLEASE CHOOSE YOUR PAYMENT METHOD</p>
            <button className="btn btn-info">Weekly</button>
            <button className="btn btn-warning">Monthly</button>
            <button className="btn btn-danger">Annual</button>
          </div>
        </div>
  );
}

export default InputPage