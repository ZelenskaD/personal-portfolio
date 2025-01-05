import './App.css';
import NavBar from './components/NavBar.js';
import Background  from "./components/background";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
        <Background />
     <NavBar />
        <Banner />
    </div>
  );
}

export default App;
