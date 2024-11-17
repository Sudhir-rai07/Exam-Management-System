import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { Textarea } from "../ui/textarea"
import toast from "react-hot-toast"
import { useOrganizationStore } from "@/zustand/store"

const AddOrganisationDialog = ({headerText}: {headerText: string}) => {
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("")

    const {addOrganization,organizations} = useOrganizationStore()
  
    const btnDisable = !id || !name || !password || !description
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Add logic to handle form submission

      addOrganization({name, description,org_id:id,email,password})
      console.log(organizations)
      toast.success("Org created")
      console.log({id, name, description, password})
      handleRest()
    }

    const handleRest = () => {
        setId(0)
        setName("")
        setEmail("")
        setPassword("")
        setDescription("")
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
              <Label htmlFor="id" className="text-right">
                Id
              </Label>
              <Input
              type="number"
                id="id"
                placeholder="Enter id"
                className="col-span-3"
                value={id}
                onChange={(e) => setId(parseInt(e.target.value))}
              />
            </div>
            
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
                id="email"
                placeholder="Enter email"
                className="col-span-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
           
  
            <div className="grid items-center w-full grid-cols-4 gap-4">
              <Label htmlFor="group" className="text-right">
                Description
              </Label>
              <Textarea value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Description" className="w-[340px]">
                
              </Textarea>
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
          <DialogFooter>
             <Button type="reset" onClick={handleRest} className="bg-gray-400 " disabled={btnDisable}>
              Reset
            </Button>
            <Button type="submit" className="text-white bg-blue-600 hover:bg-blue-700" disabled={btnDisable}>
              Submit
            </Button>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
}

export default AddOrganisationDialog