import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "@/Types/types"
import { useUser } from "@/zustand/store"
import { useState } from "react"
import toast from "react-hot-toast"

const UpdateProfile = () => {
    const {user, updateProfile} = useUser()

    const [usename, setUsername] = useState<string>(user.username)
    const [email, setEmail] = useState<string>(user.email)


    const userData:User = {
        username: usename,
        email: email,
        password : user.password,
        role: user.role,    }
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      // Your API here

        updateProfile(1, userData)
      toast.success("Profile updated")
    }
    return (
      <section className="h-full px-4 mx-4 mt-5">
       
          <form onSubmit={handleSubmit} className="px-8 py-8 mt-8 max-w-[350px] w-full">
                      <img loading="lazy" src="https://placecats.com/bella/300/300" alt="_profile-image" className="w-20 h-20 mb-2"/>
                      <hr className="w-[300px]"/>
                      <div className="flex flex-col gap-4 mt-3">
                        <Label htmlFor="username">username</Label>
                        <Input type="text" value={usename} onChange={(e)=> setUsername(e.target.value)} placeholder="username" id="username"/>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email"/>
  
                        <Button type="submit">Update Profile</Button>
                      </div>
          </form>
                
      </section>
    )
}

export default UpdateProfile