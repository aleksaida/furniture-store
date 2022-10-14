import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Example from "./Example";
import './App.css';

// import Slides from "./Slides";



function App() {
  return (
<Router>

<nav>
<Link to="/about" className="link">О магазине</Link>
<Link to="/" className="link">Каталог</Link>
<Link to="/example" className="link">Готовые решения</Link>
<Link to="/contact" className="link">Контакт</Link>
</nav>

<Routes>
<Route path="/about" element={<About/>} />
<Route path="/" element={<Home/>} />
<Route path="/example" element={<Example/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>

</Router>

  );
  
  
}

export default App;
