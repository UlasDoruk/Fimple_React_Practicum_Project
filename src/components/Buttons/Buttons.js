import "./Buttons.css"

function Buttons() {
  return (
    <div className="buttons">
      <p className="homepage-text">PLEASE CHOOSE YOUR PAYMENT METHOD</p>
      <button className="btn btn-info">Weekly</button>
      <button className="btn btn-warning">Monthly</button>
      <button className="btn btn-danger">Annual</button>
    </div>
  );
}

export default Buttons