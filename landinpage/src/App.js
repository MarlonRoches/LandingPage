import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <Header/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
           <Route  path="/About" element={<About/>} />
           <Route  path="/Services"  element={<Services/>}/>
           <Route  path="/Portfolio" element={<Portfolio/>} />
           <Route  path="/Blog"  element={<Blog/>}/>
           <Route  path="/Contact"  element={<Contact/>}/>
        {/* <Route path="/cupcackes" element={<Cupcackes peticion="cupcakes" title/>}/>
        <Route path="/nosotros" element={<About/>}/>
        <Route index path="/" element={<Home/>}/> */}
        <Route path="*"  element={<Home/>} />
      </Routes>

    <Footer/>
  </Router>
 
  );
}

export default App;
