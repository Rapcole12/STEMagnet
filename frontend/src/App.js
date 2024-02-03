import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import findingMatchesPage from './pages/findingMatchesPage.jsx'
import Home from './pages/Home';
import menteeProfile from './pages/menteeProfile.jsx'
import mentorProfile from './pages/mentorProfile.jsx'
import profileSettuo from './pages/profileSettuo.jsx'
import quotes from './pages/quotes.jsx'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


function App() {
  return (<BrowserRouter><Routes>
          <Route path = '/' element =
           {
    <Home />
           } />
        <Route path="/SignIn
             ' element={<SignIn />} /' < Route path = '/SignUp' element =
           {
    <SignUp />
           } />
        <Route path="/profileSettup ' element={<settUp />} /'

               < /Routes>
    </BrowserRouter>);
}

export default App;
