import { useState } from 'react';
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import Loading from "../src/components/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from '../src/components/Form';
import { Suspense } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className='APP'>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
