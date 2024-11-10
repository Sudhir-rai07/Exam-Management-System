import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Breadcrumbs from "../Breadcrumbs";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);



  const toggelPasswordView = () => {
    setShowPassword((prev) => !prev);
  };


  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
        if(!username || !password){
            return toast.error("Both fields are required");
        }
        console.log(username, null, password)
        setUsername("")
        setPassword("")
  }
  return (
    <div className="w-full h-screen">
      <section className="flex w-full h-full">
        <div className="w-0 h-full lg:w-1/3">
          <img src="./images/loginPagePicture.png" className="w-full h-full" />
        </div>

        <div className="relative flex flex-col items-center justify-center w-full lg:w-2/3">
        <div className="max-w-[300px] absolute top-0 left-0 ml-4">
    <Breadcrumbs />
    </div>
          <form onSubmit={handleSubmit} className="h-[500px] lg:w-[700px] lg:shadow-[0px_0px_10px_4px_#cbd5e0] ml-4 rounded-md flex-col flex justify-center px-12">
            <p className="text-2xl font-semibold lg:text-3xl">Login to Exam Management System</p>
            <span className="my-2 text-xl text-gray-600">{"Good afternoon!"}</span>

            <div className="bg-transparent flex rounded-sm items-center gap-2 bg-gray-200 px-2 py-2 max-w-[350px]">
              <FaUser color="gray" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 bg-transparent rounded-sm focus:outline-none "
              />
            </div>

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-200 px-2 py-2 max-w-[350px]">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-transparent rounded-sm focus:outline-none "
              />
              {!showPassword ? (
                <>
                  <IoMdEye
                    color="gray"
                    className="cursor-pointer"
                    onClick={toggelPasswordView}
                  />
                </>
              ) : (
                <>
                  <IoMdEyeOff
                    color="gray"
                    className="cursor-pointer"
                    onClick={toggelPasswordView}
                  />
                </>
              )}
            </div>

            <div className="flex justify-between max-w-[350px] mt-6">
                <div className="space-x-1 ">
                <input type="checkbox" name="remember-me" id="remember-me" checked={rememberPassword} onChange={(e)=> setRememberPassword(prev => !prev)}/> <label htmlFor="remember-me" className="cursor-pointer">Remember password</label>
                </div>
                <span className="text-blue-500 transition cursor-pointer hover:underline">Forgot password</span>
            </div>

            <button type="submit" className="bg-blue-600 text-white w-[350px] mt-4 py-1">Login</button>
            <span className="mt-3 text-sm text-gray-600">Don't have an account? <Link to={"/signup"} className="transition hover:text-blue-600">Create</Link></span>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
