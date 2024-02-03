import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import MenteePage from "./pages/MenteePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MenteePage" element={<MenteePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
