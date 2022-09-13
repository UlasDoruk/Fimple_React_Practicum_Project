import './App.css';
import HomePage  from './components/Pages/homepage';
import Table from "./components/Pages/Table";
import {Routes,Route} from "react-router-dom"
import {InputProvider} from "./components/Context/InputContext"
import {ContainerProvider} from "./components/Context/ContainerContext"

function App() {

  return (
    <div className="App">
      <ContainerProvider>
        <InputProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Table" element={<Table />}></Route>
          </Routes>
        </InputProvider>
      </ContainerProvider>
    </div>
  );
}

export default App;
