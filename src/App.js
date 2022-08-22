import React from 'react'
import { BrowserRouter } from "react-router-dom";
// import Landingpage from './components/landingpage/landingpage';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar';
import Home from "./components/home/home"
function App() {
  return (
<BrowserRouter>
<Navbar/>
<Home/>
  {/* <Landingpage/> */}

  </BrowserRouter>
  );
}

export default App;
