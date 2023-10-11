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

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <BrowserRouter>

            <Header />
            <Routes>
              <Route path="/"  {...props} element={<Login />} />
              <Route path="login"  {...props} element={<Login />} />
              <Route path="homebanner" {...props} element={<Banner />} />
              <Route path="shirts" {...props} element={<Shrits />} />
              <Route path="shoes" {...props} element={<Shoes />} />
              <Route path="timeline" {...props} element={<Timeline />} />
              <Route path="tshirts" {...props} element={<Tshirts />} />
              <Route path="combos" {...props} element={<Combos />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </center>
      </header>
    </div>
  );
}

export default App;
