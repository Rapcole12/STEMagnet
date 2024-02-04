import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import profileSettuo from './pages/profileSettuo.jsx'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/FindingMatchesPage" element={<FindingMatchesPage />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/MenteeProfile" element={<MenteeProfile />} />
        <Route path="/MentorProfile" element={<MentorProfile />} />
        <Route path="/ProfileSettup" element={<ProfileSettup />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
