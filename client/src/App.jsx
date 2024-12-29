import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import { useState } from "react";

function App() {
  const [section, setSection] = useState("");
  return (
    <>
      <Router>
        <Navbar setSection={setSection} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={<Account setSection={setSection} />}
            path="/account"
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
