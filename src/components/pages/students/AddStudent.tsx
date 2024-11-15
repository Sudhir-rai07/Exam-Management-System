import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import toast from "react-hot-toast"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useStudentStore } from "@/zustand/store"

const AddStudent = ({headerText}: {headerText: string}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState<File | null>()
    const avatarRef = useRef<HTMLInputElement | null>(null)
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
          setAvatar(event.target.files[0]);
        }
      };

      const triggerFileInput = () =>{
        avatarRef.current?.click()
      }


      const {addStudent} = useStudentStore()

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Add logic to handle form submission

      addStudent({user_id: 1, username:name, email:email, password:password, role:"Student"})
      toast.success("Org created")
      setTimeout(() => {
          handleRest()
        
      }, 300);
    }

    const handleRest = () => {
            setName("")
            setEmail("")
            setGroup("")
            setPassword("")
            setAvatar(null)
    }
  
    return (
      <Dialog>
        <DialogTrigger  asChild>
          <Button variant="outline" className="text-white bg-blue-500">
            <Plus />
            New
          </Button>
        </DialogTrigger>
        <DialogContent className="" >
          <DialogHeader>
            <DialogTitle className="text-xl">Add {headerText}</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter name"
                className="col-span-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
              type="email"
                id="email"
                placeholder="Enter email"
                className="col-span-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="group" className="text-right">
                Group
              </Label>
              <Input
              type="text"
                id="group"
                placeholder="Enter group"
                className="col-span-3"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              />
            </div>
  
  
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                placeholder="Enter password"
                className="col-span-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="avatar" className="text-right">
                Avatar
              </Label>
              <input 
              type="file"
                id="file"
                hidden={true}
                ref={avatarRef}
                accept="image/*"
                placeholder="Select avatar"
                className="col-span-3"
                onChange={handleFileChange}
              />
              <div className="relative w-full h-[200px] overflow-hidden rounded-md bg-gray-200 flex items-center col-span-3" onClick={triggerFileInput}>
                <Plus size={48} color="white" className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-gray-400/50 top-1/2 left-1/2"/>
                <p>{avatar && <img src={URL.createObjectURL(avatar)} className="object-cover w-full h-full"/>}</p>
              </div>
            </div>



          <DialogFooter className="gap-4">
             <Button type="reset" onClick={handleRest} className="bg-gray-400 ">
              Reset
            </Button>
            <Button type="submit" className="text-white bg-blue-600 hover:bg-blue-700">
              Submit
            </Button>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
}

export default AddStudent