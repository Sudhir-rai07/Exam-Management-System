import React, {  useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import { Input } from "../ui/input";
import { AuthUser } from '@/Types/types';
import { useAuthStore } from '@/zustand/store';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import toast from 'react-hot-toast';

const Login = () => {
  const {setUser} = useAuthStore()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const toggelPasswordView = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSuccess = (response: any) => {
    const decoded: AuthUser = jwtDecode(response.credential); // Decode JWT
    console.log('Decoded User Info:', decoded);
    setUser(decoded); // Save user data in Zustand
    navigate("/")
    toast.success("Logged in")
  };

  const handleError = () => {
    console.log('Login Failed');
  };

// Handle Submit
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(username, null, password);
    setUsername("");
    setPassword("");
  };
  return (
    <div className="w-full h-screen">
      <section className="flex w-full h-full">
        <div className="w-0 h-full lg:w-1/3">
          <img src="./images/loginPagePicture.png" className="w-full h-full" />
        </div>

        <div className="relative flex flex-col bg-[#fafafa] dark:bg-[#18181b] items-center justify-center w-full lg:w-2/3">
          <div className="max-w-[300px] absolute top-0 left-0 ml-4">
            <Breadcrumbs />
          </div>
          <form
            onSubmit={handleSubmit}
            className="h-[500px] lg:w-[700px]  ml-4 rounded-md flex-col flex justify-center px-12"
          >
            <p className="text-2xl font-semibold lg:text-3xl">
              Login to Exam Management System
            </p>
            <span className="my-2 text-xl text-gray-600">
              {"Good afternoon!"}
            </span>

            <div className="bg-transparent flex rounded-sm items-center gap-2 bg-gray-200 px-2 py-2 max-w-[350px]">
              <FaUser color="gray" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 bg-transparent rounded-sm focus:outline-none "
              />
            </div>

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-200 px-2 py-2 max-w-[350px]">
              {showPassword ? (
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
              <Input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-transparent rounded-sm focus:outline-none "
              />
            </div>

            <div className="flex items-center justify-between max-w-[350px] mt-6">
              <div className="flex items-center space-x-1">
                <Input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="w-4"
                  checked={rememberPassword}
                  onChange={() => setRememberPassword((prev) => !prev)}
                />{" "}
                <label htmlFor="remember-me" className="cursor-pointer">
                  Remember password
                </label>
              </div>
              <Link
                to={"/reset-password"}
                className="text-blue-500 transition cursor-pointer hover:underline"
              >
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-[350px] mt-4 py-1"
            >
              Login
            </button>
            <span className="mt-3 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to={"/signup"} className="transition hover:text-blue-600">
                Create
              </Link>
            </span>
            <div className="mt-4 max-w-[350px]">
            <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
