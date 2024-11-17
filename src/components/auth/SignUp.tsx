import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff, IoMdMail, IoMdPeople } from "react-icons/io";
import { LiaCriticalRole } from "react-icons/lia";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useUser } from "@/zustand/store";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  
  const { loginWithRedirect} = useAuth0()
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const toggelPasswordView = () => {
    setShowPassword((prev) => !prev);
  };

  const {signUp, user } = useUser()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password || !email || !role) {
      return toast.error("All fields are required");
    }
    // Your API request here
    // signUp({username, email, password, role, created_at: Date.now()})
    // user
    console.log(user)
    // Toast notification
    toast.success("User created")
    // State change
    setUsername("");
    setPassword("");
    setEmail("");
    setRole("");
  };
  return (
    <div className="w-full h-screen">
      <section className="flex w-full h-full">
        <div className="w-0 h-full lg:w-1/3">
          <img src="./images/loginPagePicture.png" className="w-full h-full" />
        </div>

        <div className="relative flex bg-[#fafafa] dark:bg-[#18181b] items-center justify-center w-full lg:w-2/3">
          <div className="max-w-[300px] absolute top-0 left-0 ml-4">
            <Breadcrumbs />
          </div>
          <form
            onSubmit={handleSubmit}
            className="py-8 w-[700px] shadow-[0px_0px_10px_4px_#cbd5e0] ml-4 rounded-md flex-col flex justify-center px-12"
          >
            <p className="text-3xl font-semibold">
              SignUp to Exam Management System
            </p>
            <span className="my-2 text-xl text-gray-600">
              {"Good afternoon!"}
            </span>

            <div className="bg-transparent flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              <FaUser color="gray" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 bg-transparent rounded-sm focus:outline-none "
              />
            </div>

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              <IoMdMail color="gray" />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent rounded-sm focus:outline-none "
              />
            </div>

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              {showPassword ? (
                <>
                  <IoMdEye
                  size={18}
                    color="gray"
                    className="cursor-pointer"
                    onClick={toggelPasswordView}
                  />
                </>
              ) : (
                <>
                  <IoMdEyeOff
                  size={18}
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

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              <IoMdPeople size={18} color="gray" />
              <Select onValueChange={(value) => setRole(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="system-admin">System Admin</SelectItem>
                  <SelectItem value="organisation admin">Organisation Admin</SelectItem>
                  <SelectItem value="instructor">Instructor</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-600 text-white w-[350px] mt-4 py-1"
            >
              SignUp
            </Button>
            <span className="mt-3 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to={"/login"} className="transition hover:text-blue-600">
                Login
              </Link>
            </span>
            <p className="text-center mt-2 text-gray-500 font-semibold max-w-[350px]">Or</p>
            <Button variant={"outline"} className=" w-[350px] mt-2" onClick={()=> loginWithRedirect()}>Continue with Google</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
