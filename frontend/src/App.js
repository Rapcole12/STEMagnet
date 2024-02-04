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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
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