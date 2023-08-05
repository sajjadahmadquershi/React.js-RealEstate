import Header from "./components/Header/Header";
import Hero from "./components/herosection/Hero";
import './App.css'
import './index.css'
import Companies from "./components/companies/companies";
import Residency from "./components/residency/Residency";
import Value from "./components/value/Value";
import Contect from "./components/Contect/Contect";
import Getstart from "./components/getstart/Getstart";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
    <div>
    <div className="white-gradient"/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Residency/>
    <Value/>
    <Contect/>
    <Getstart/>
    <Footer/>
    </div>
  );
}

export default App;
