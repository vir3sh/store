import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import axios from "axios";
import { useContext } from "react";
import { shopContext } from "@/context/shopContext";
function Navbar() {
  const { backendUrl } = useContext(shopContext);
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      const response = await axios.post(backendUrl + "/api/user/logout");

      if (response.data.success) {
        navigate("/login");
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between p-2 items-center border-b border-b-black border-solid">
      <div className="left">
        <Link to="/">
          {/* <img src={logo} className="h-14" alt="" /> */}
          <h1 className="text-4xl ">LOGO</h1>
        </Link>
      </div>

      <div className=" sm:flex flex-row list-none gap-3 ">
        <Button
          className=" text-lg self-center bg-black text-white py-2 px-2 "
          onClick={Logout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
