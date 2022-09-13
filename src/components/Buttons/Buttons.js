import "./Buttons.css"

function Buttons() {
  return (
    <div className="buttons">
      <p className="homepage-text">PLEASE CHOOSE YOUR PAYMENT METHOD</p>
      <button className="btn btn-danger">WEEKLY</button>
      <button className="btn btn-danger">MONTHLY</button>
      <button className="btn btn-danger">ANNUAL</button>
    </div>
  );
}

export default Buttons