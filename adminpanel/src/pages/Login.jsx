import { shopContext } from "@/context/shopContext";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { backendUrl, setIsloggedin, setToken } = useContext(shopContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        backendUrl + "/api/user/adminlogin",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);

      if (response.data.success) {
        setEmail("");
        setPassword("");
        const token = response.data.token; // Retrieve token from response
        localStorage.setItem("token", token);
        setToken(token);
        setIsloggedin(true); // Trigger the state change
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Login Error:", error); // Log the error
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white h-auto w-96 flex flex-col p-8 rounded-lg shadow-lg">
        <h4 className="text-black text-3xl text-center font-semibold mb-6">
          Admin Login
        </h4>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-lg text-black" htmlFor="Email">
              Email
            </label>
            <input
              className="border border-black rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg text-black" htmlFor="Password">
              Password
            </label>
            <input
              className="border border-black rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
