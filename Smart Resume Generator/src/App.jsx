import { useState } from 'react';
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import Loading from "../src/components/Loading"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

        <div className='APP'>
               

                <Suspense fallback={<Loading />}>
                          <Route path="/" element={<Home/>}></Route>
                </Suspense>
                <Suspense fallback={<Loading />}>
                          <Route path="/resume" element={<Resume/>}></Route>
                </Suspense>
             
             
       
        </div>

    </BrowserRouter>
  )
}

export default App
