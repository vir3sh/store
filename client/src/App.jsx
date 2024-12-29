import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import { useState } from "react";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [section, setSection] = useState("");
  return (
    <>
      <Router>
        <Navbar setSection={setSection} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Account />} path="/account" />
          <Route element={<SingleProduct />} path="/singleproduct" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
