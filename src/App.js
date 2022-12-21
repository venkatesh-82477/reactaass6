import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from './components/Nav';
import Appbar from './router/Appbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Appbar />
      </BrowserRouter>
    </div>
  );
}

export default App;