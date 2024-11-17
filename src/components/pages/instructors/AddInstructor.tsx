import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useOrganizationStore } from "@/zustand/store";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddInstructor = ({ headerText }: { headerText: string }) => {
  const [id, setId] = useState<number | string>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addInstructor, organizations } = useOrganizationStore();
  const org1 = organizations[0];
  const btnDisable = !id || !name || !password || !email;
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle form submission
    addInstructor(org1.org_id, {
      email,
      password,
      user_id: id,
      username: name,
      role: "instructor",
    });
    console.log(organizations);
    toast.success("Instructor added");
    console.log({ id, name, email, password });
    
    handleRest()
  };

  const handleRest = () => {
    setId(0);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Dialog>
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
            <Label htmlFor="id" className="text-right">
              ID
            </Label>
            <Input
              id="id"
              type="number"
              placeholder="Enter Id"
              className="col-span-3"
              value={id}
              onChange={(e) => setId(e.target.value)}
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
              type="email"
              id="email"
              placeholder="Enter email"
              className="col-span-3"
              value={email}
              onChange={(e) => setEmail((e.target.value))}
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

          <DialogFooter>
            <Button
              type="reset"
              onClick={handleRest}
              className="bg-gray-400 "
              disabled={btnDisable}
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700"
              disabled={btnDisable}
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddInstructor;
