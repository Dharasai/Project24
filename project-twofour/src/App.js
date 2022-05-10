import React from "react";
import {
  BrowserRouter,
  Route,
 Routes,
} from "react-router-dom";

import Login from "./Components/Login"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Timeline from "./Components/Timeline"
import Tshirts from './Tshirts/Tshirts'
import Banner from './Banner/Banner'
import Shrits from './Shirts/Shirts'
import Shoes from './Shoes/Shoes'
import Combos from './Combos/Combos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <BrowserRouter>
            <Header />
            <Banner />
          <Routes>
              <Route path="shirts"  element={<Shrits />}/>
              <Route path="shoes"  element={<Shoes />}/>
              <Route path="login"  element={<Login />}/>
              <Route path="timeline"  element={<Timeline />}/>
              <Route path="tshirts" exact element={<Tshirts />}/>
              <Route path="combos" exact element={<Combos />}/>
              </Routes>
            <Footer />
          </BrowserRouter>
        </center>
      </header>
    </div>
  );
}

export default App;
