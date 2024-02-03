import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import profileSettuo from './pages/profileSettuo.jsx'
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
