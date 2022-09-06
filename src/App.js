import './App.css';
import HomePage  from './components/Pages/homepage';
import Table from "./components/Pages/Table";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Table" element={<Table />}></Route>
      </Routes>
    </div>
  );
}

export default App;
