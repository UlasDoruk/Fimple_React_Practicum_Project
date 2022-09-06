import "./Buttons.css"

function Buttons() {
  return (
    <div className="buttons">
      <p className="homepage-text">PLEASE CHOOSE YOUR PAYMENT METHOD</p>
      <button className="btn btn-danger">Weekly</button>
      <button className="btn btn-danger">Monthly</button>
      <button className="btn btn-danger">Annual</button>
    </div>
  );
}

export default Buttons