import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import FindingMatchesPage from "./pages/findingMatchesPage"
import Inbox from "./pages/inbox"
import MenteeProfile from "./pages/menteeProfile"
import ProfileSettup from "./pages/profileSettup"
import Quotes from "./pages/quotes"
import AboutUs from "./pages/aboutUs";
import ProfileCarousel from "./pages/ProfileCarousel";
import MentorProfile from "./pages/mentorProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/create_user"/>
        <Route path="/create_user/:id"/>
        <Route path="/SignIn/authenticate"/>
        <Route path="/FindingMatchesPage" element={<FindingMatchesPage />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/MenteeProfile" element={<MenteeProfile />} />
        <Route path="/ProfileSettup" element={<ProfileSettup />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/ProfileCarousel" element={<ProfileCarousel />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/MentorProfile" element={<MentorProfile/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;