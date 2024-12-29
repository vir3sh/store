import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Account />} path="/account" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
