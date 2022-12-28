import Navbar from "./components/Navbar";
import { Routes , Route } from 'react-router-dom'
import Home from "./pages/Home";
import Acep from "./pages/Acep";
import Metaversity from "./pages/Metaversity";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Web3 from "./pages/Web3";
import Usedfor from "./pages/Usedfor"



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='acep' element={<Acep/>}/>
      <Route path='metaverse' element={<Metaversity/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path="web3" element={<Web3/>}/>
      <Route path="usedfor" element={<Usedfor/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
