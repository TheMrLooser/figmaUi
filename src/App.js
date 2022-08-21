import React from "react";
import Game from "./pages/game";
import {Route,BrowserRouter,Routes,Link} from 'react-router-dom'
import GameDetail from "./pages/gameDetail";
import Navbar from "./component/nav";
import Landing from "./pages/landing";
import Footer from "./pages/footer";
import Allise from "./pages/allise";

const App = ()=>{
  return(<>
        <div>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/game" element={<Game/>}/>
              <Route path="/" element={<Landing/>}/>
              <Route path="/gamedetail" element={<GameDetail/>}/>
              <Route path="/allise" element={<Allise/>}/>
              
            </Routes>
            {/* <Footer/> */}
          </BrowserRouter>
         
        </div>
  </>)
}


export default App