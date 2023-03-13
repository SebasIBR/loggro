import './assets/css/App.css';
import NavBar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Foooter';
import Load from './components/Load'
import Query from './components/Query';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/carga' exact={true} Component={Load}/>
        <Route path='/consulta' exact={true} Component={Query}/>
        <Route path='/' exact={true} Component={Main}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
