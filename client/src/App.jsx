import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Account />} path="/account" />
        <Route element={<Collection />} path="/collection" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
