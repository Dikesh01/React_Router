import React from "react";
// Pages imports
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Navbar from "./Pages/Navbar";

// Pages 1 imports
import Brand from "./Pages1/Brand";
import Nokia from "./Pages1/Nokia";
import MacBook from "./Pages1/MacBook";
import Samsung from "./Pages1/Samsung";

import { Routes, Route } from "react-router-dom";

const App =() =>{
     
    return (
        <div>
            {/* Pages list */}
            {/* <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes> */}

            {/* Pages 1 list */}
            <Routes>
                <Route path="/brand" element={<Brand />}>
                    <Route path="nokia" element={<Nokia />} />
                    <Route path="" element={<MacBook />} />
                    <Route path="samsung" element={<Samsung />} />
                </Route>
            </Routes> 
                
        </div>
    )
}

export default App;