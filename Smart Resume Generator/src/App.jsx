import { useState } from 'react';
import Home from "./components/Home";
import Resume from "./components/Resume";
import Loading from "../src/components/Loading"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Suspense } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

        <div className='APP'>
                <h1>Resume Builder with AI</h1>

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
