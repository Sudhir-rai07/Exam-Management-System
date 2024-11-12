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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"

const AddOrganisationDialog = ({headerText}: {headerText: string}) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [group, setGroup] = useState("")
  
    const btnDisable = !email || !name || !password || !group
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Add logic to handle form submission
      console.log({email, name, group, password})
    }

    const handleRest = () => {
        setEmail("")
        setName("")
        setGroup("")
        setPassword("")
    }
  
    return (
      <Dialog >
        <DialogTrigger asChild>
          <Button variant="outline" className="text-white bg-blue-500">
            <Plus />
            New
          </Button>
        </DialogTrigger>
        <DialogContent className="">
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
              <Select onValueChange={value => setGroup(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Groups</SelectLabel>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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