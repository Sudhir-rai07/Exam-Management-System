import { Button } from "@/components/ui/button"
import { useUser } from "@/zustand/store"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

const Profile = () => {
  const {user} = useUser()
  return (
    <section className="h-full px-4 mx-4 mt-5">
      <div className="flex justify-end gap-4 ml-auto">
      <Button className=""><Link to={'/update-profile'}>Update</Link></Button>
      <Button variant={"destructive"} className="" type="submit" onClick={()=> toast.success("Logged out")}><Link to={'/login'}>Log out</Link></Button>
      </div>
        <div className="px-8 py-8 mt-8 ">
                    <img loading="lazy" src="https://placecats.com/bella/300/300" alt="_profile-image" className="w-20 h-20 mb-2"/>
                    <hr className="w-[300px]"/>
                    <div className="flex flex-col gap-4 mt-3">
                    <p className="text-gray-400">Name : <span className="text-sm ">{user.username}</span></p>
                    <p className="text-gray-400">Email : <span className="text-sm ">{user.email}</span></p>
                    <p className="text-gray-400">Role : <span className="text-sm ">{user.role}</span></p>
                    </div>
        </div>
  
    </section>
  )
}

export default Profile


