import { Link } from "react-router-dom";
import { Button } from "./ui/button";
function Navbar() {
  return (
    <div className="flex justify-between p-2 items-center border-b border-b-black border-solid">
      <div className="left">
        <Link to="/">
          {/* <img src={logo} className="h-14" alt="" /> */}
          <h1 className="text-4xl ">LOGO</h1>
        </Link>
      </div>

      <div className="hidden sm:flex flex-row list-none gap-3 ">
        <Button
          className=" text-lg self-center bg-black text-white py-2 px-2 "
          to={"/"}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
