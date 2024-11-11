import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './components/Contact';
import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Profile from './components/Profile';
import SignIn from './pages/Auth/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/LandingPage';
import UserProfile from './pages/UserProfile';
import Templates from './pages/Templates';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ExtraDetails from './components/ExtraDetails';
import ResumeLayout from './components/ResumeLayout';
import ErrorPage from './pages/ErrorPage';
import { FaPlus, FaMinus } from 'react-icons/fa';
// import Demo from './pages/Demo';


function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route element={<Layout />}>
                <Route path='/user-profile' element={<UserProfile />} />
                <Route path='/templates' element={<Templates />} />
                {/* <Route path='/create-resume' element={<Home />} /> */}
                <Route element={<ResumeLayout />}>
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/education' element={<Education />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/experience' element={<Experience />} />
                  <Route path='/extraDetails' element={<ExtraDetails />} />
                </Route>
                <Route path='/resume/:template' element={<Resume />} />
                <Route path='/contact-us' element={<Contact />} />
                {/* <Route path='/demo' element={<Demo />} /> */}
                <Route path='*' element={<ErrorPage />} />
              </Route>
            </Routes>
            <ToastContainer />
            {/* Chatbot */}
            <div className="chatbot-container">
              <button className={`chatbot-toggle ${isChatOpen ? 'open' : 'closed'}`} onClick={toggleChat}>
                {isChatOpen ? 'Collapse' : 'Expand'} Chat <i>{isChatOpen ? <FaMinus /> : <FaPlus />}</i>
              </button>
              <iframe
                className={`chatbot-iframe ${isChatOpen ? 'visible' : 'hidden'}`}
                src="https://console.dialogflow.com/api-client/demo/embedded/f74e2afe-eafa-4483-860c-295b5920ae74"
                title="Dialogflow Chatbot"
              ></iframe>
            </div>
          </BrowserRouter>
          <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
