import './App.css';
import HomePage  from './components/Pages/homepage';
import Table from "./components/Pages/Table";
import {Routes,Route} from "react-router-dom"
import {InputProvider} from "./components/Context/InputContext"
import {ContainerProvider} from "./components/Context/ContainerContext"
import { FormulaProvider } from './components/Context/FormulaContext';

function App() {
  // Context apı'lerdeki providerları fonksiyon olarak dışarı çıkardık App.js'e sarmaladık
  return (
    <div className="App">
      <InputProvider>
        <ContainerProvider>
          <FormulaProvider>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/Table" element={<Table />}></Route>
            </Routes>
          </FormulaProvider>
        </ContainerProvider>
      </InputProvider>
    </div>
  );
}

export default App;
