import { Button } from "@/components/ui/button";
import { useUser } from "@/zustand/store";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Breadcrumbs from "@/components/Breadcrumbs";
const Profile = () => {
  // const {user} = useUser()
  const { user, logout } = useAuth0();
  return (
    <section className="h-full px-4 mx-4 mt-5">
      <Breadcrumbs />
      <div className="flex justify-end gap-4 ml-auto">
        <Button className="">
          <Link to={"/update-profile"}>Update</Link>
        </Button>
        <Button
          variant={"destructive"}
          className=""
          type="submit"
          onClick={() =>logout({logoutParams: {returnTo: window.location.origin}})}
        >
          Log out
        </Button>
      </div>
      <div className="px-8 py-8 mt-8 ">
        <img
          loading="lazy"
          src={user?.picture}
          alt="_profile-image"
          className="w-20 h-20 mb-2"
        />
        <hr className="w-[300px]" />
        <div className="flex flex-col gap-4 mt-3">
          <p className="text-gray-400">
            Name : <span className="text-sm ">{user?.name}</span>
          </p>
          <p className="text-gray-400">
            Email : <span className="text-sm ">{user?.email}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
