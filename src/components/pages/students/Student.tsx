import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStudentStore } from "@/zustand/store";
import { useState } from "react";
import toast from "react-hot-toast";

const Student = () => {
  const { students, removeStudent, editStudent } = useStudentStore();
  const student1 = students[0];
  const [username, setUsername] = useState(student1.username);
  const [email, setemail] = useState(student1.email);

  const handleRemoveStudent = () =>{
    // removeStudent(student1.user_id);
    toast.success('Student removed successfully');
  }

  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // YOUR API CALL HERE
    editStudent(student1.user_id, { username, email: email });
    toast.success("Profile updated successfully");
  };
  return (
    <div className="w-full h-full">
      <h1 className="my-8 text-xl font-semibold">Manage Student</h1>
      <div className="text-gray-500">
        <p>
          Student id : <span className="font-semibold">{student1.user_id}</span>
        </p>
        <p>
          Student name :{" "}
          <span className="font-semibold">{student1.username}</span>
        </p>
        <p>
          Student email :{" "}
          <span className="font-semibold">{student1.email}</span>
        </p>
        <p>
          Student password :{" "}
          <span className="font-semibold">{student1.password}</span>
        </p>

        <div className="mt-8 space-x-8">
          <Button
            variant={"destructive"}
            className="hover:bg-red-500"
            onClick={handleRemoveStudent}
          >
            Remove
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]" aria-description="add-student-dialog">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEditProfile} className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Student;
