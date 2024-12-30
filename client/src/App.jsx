import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Account />} path="/account" />
          <Route element={<SingleProduct />} path="/singleproduct" />
          <Route element={<Collection />} path="/collection" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
