import Navbar from "./components/Navbar";
import { Routes , Route } from 'react-router-dom'
import Home from "./pages/Home";
import Acep from "./pages/Acep";
import Metaversity from "./pages/Metaversity";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Web3 from "./pages/Web3";
import Usedfor from "./pages/Usedfor"
import { useState } from 'react'



function App() {
  const [query , setQuery] = useState('')
  return (
    <>
    <Navbar onQuery = {setQuery}/>
    <Routes>
      <Route path="/" element={<Home query = {query}/>}/>
      <Route path='acep' element={<Acep/>}/>
      <Route path='metaverse' element={<Metaversity/>}/>
      <Route path='contact' element={<Contact query = {query}/>}/>
      <Route path="web3" element={<Web3/>}/>
      <Route path="usedfor" element={<Usedfor/>}/>
    </Routes>
    <Footer query = {query}/>
    </>
  );
}

export default App;
