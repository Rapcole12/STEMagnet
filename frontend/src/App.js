import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import FindingMatchesPage from "./pages/findingMatchesPage"
import Inbox from "./pages/inbox"
import MenteeProfile from "./pages/menteeProfile"
import MentorProfile from "./pages/mentorProfile"
import ProfileSettup from "./pages/profileSettup"
import Quotes from "./pages/quotes"
import AboutUs from "./pages/aboutUs";
import ProfileCarousel from "./pages/ProfileCarousel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/create_user"/>
        <Route path="/create_user/:id"/>
        <Route path="/FindingMatchesPage" element={<FindingMatchesPage />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/MenteeProfile" element={<MenteeProfile />} />
        <Route path="/MentorProfile" element={<MentorProfile />} />
        <Route path="/ProfileSettup" element={<ProfileSettup />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/ProfileCarousel" element={<ProfileCarousel />} />
        <Route path="/AboutUs" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;