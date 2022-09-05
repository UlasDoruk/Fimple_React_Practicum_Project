import "./PaymentOptions.css";

function PaymentOptions() {
  return (
    <div>
      <div className="container">
        <button className="btn btn-dark">Weekly</button>
        <button className="btn btn-dark">Monthly</button>
        <button className="btn btn-dark">Annual</button>
      </div>
    </div>
  );
}

export default PaymentOptions;
