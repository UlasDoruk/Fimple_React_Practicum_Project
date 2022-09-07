import './App.css';
import HomePage  from './components/Pages/homepage';
import Table from "./components/Pages/Table";
import {Routes,Route} from "react-router-dom"
import {InputProvider} from "./components/Context/InputContext"
import {FormulaProvider} from "./components/Context/FormulaContext"

function App() {
  return (
    <div className="App">
      <FormulaProvider>
        <InputProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Table" element={<Table />}></Route>
          </Routes>
        </InputProvider>
      </FormulaProvider>
    </div>
  );
}

export default App;
