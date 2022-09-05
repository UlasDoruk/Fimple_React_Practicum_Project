import PaymentButtons from "../Buttons/PaymentOptions"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar/>
      <PaymentButtons/>
      <Footer/>
    </div>
  );
}

export default HomePage