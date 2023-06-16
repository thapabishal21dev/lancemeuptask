import "./App.css";
import { UserForm } from "./components/form/Form";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { ProfilePage } from "./pages/profile/Profile";

export const ProfileContext = createContext();

function App() {
  const [profileData, setProfileData] = useState(null);

  return (
    <>
      <ProfileContext.Provider value={{ profileData, setProfileData }}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<UserForm />} />
            <Route exact path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      </ProfileContext.Provider>
    </>
  );
}

export default App;
