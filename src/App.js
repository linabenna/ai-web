import React from "react";
import { Routes,Route } from "react-router-dom";
import About from "./routes/About";
import Home from './routes/Home'
import Community from "./routes/Community";
import Apply from "./routes/Apply";

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/apply' element={<Apply/>}/>

     </Routes>
    </div>
  );
}

export default App;
