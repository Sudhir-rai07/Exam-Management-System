import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff, IoMdMail, IoMdPeople } from "react-icons/io";
import { LiaCriticalRole } from "react-icons/lia";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [group, setGroup] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  const toggelPasswordView = () => {
    setShowPassword((prev) => !prev);
  };


  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
        if(!username || !password || !email || !group || !role){
            return toast.error("All fields are required");
        }
        console.log(username, null, password)
        setUsername("")
        setPassword("")
        setEmail("")
        setGroup("")
        setRole("")
  }
  return (
    <div className="w-full h-screen">
      <section className="h-full w-full flex">
        <div className=" lg:w-1/3 h-full w-0">
          <img src="./images/loginPagePicture.png" className="h-full w-full" />
        </div>

        <div className="w-full lg:w-2/3 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="h-[500px] w-[700px] shadow-[0px_0px_10px_4px_#cbd5e0] ml-4 rounded-md flex-col flex justify-center px-12">
            <p className="text-3xl font-semibold">SignUp to Exam Management System</p>
            <span className="text-gray-600 my-2 text-xl">{"Good afternoon!"}</span>

            <div className="bg-transparent flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              <FaUser color="gray" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent focus:outline-none flex-1 rounded-sm "
              />
            </div>

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              <IoMdMail color="gray" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent focus:outline-none flex-1 rounded-sm "
              />
            </div>

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent focus:outline-none flex-1 rounded-sm "
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

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              <IoMdPeople color="gray" />
              <input
                type="text"
                placeholder="Group"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="bg-transparent focus:outline-none flex-1 rounded-sm "
              />
            </div>

            <div className="bg-transparent mt-4 flex rounded-sm items-center gap-2 bg-gray-100 px-2 py-2 max-w-[350px]">
              <LiaCriticalRole color="gray" />
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-transparent focus:outline-none flex-1 rounded-sm "
              />
            </div>


            <button type="submit" className="bg-blue-600 text-white w-[350px] mt-4 py-1">SignUp</button>
            <span className="mt-3 text-sm text-gray-600">Already have an account?  <Link to={"/login"} className="hover:text-blue-600 transition">Login</Link></span>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
