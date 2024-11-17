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
import { User } from "@/Types/types";
import { useStudentGroupStore } from "@/zustand/store";
import { useState } from "react";
import toast from "react-hot-toast";

const StudentGroup = () => {
  const { groups } = useStudentGroupStore();
  const grp1 = groups[0];

  return (
    <div className="w-full h-full p-4 shadow-md">
      <h1 className="text-xl font-semibold">StudentGroup</h1>
      <div className="my-8">
        <p>
          Group Id <span className="font-semibold">{"101"}</span>
        </p>
        <p>
          Group name <span className="font-semibold">{grp1.name}</span>
        </p>

<hr className="my-4 "/>
        <div className="grid grid-cols-1 gap-6 md:grid-col-2 lg:grid-cols-3 place-items-center md:place-items-start">
          {grp1.students.map((student: User, index: number) => {
            const [name, setName] = useState(student.username);
            const [email, setEmail] = useState(student.email);
            const [password, setPassword] = useState(student.password);

            const handleEditStudent = (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              // API call to update student
              console.log("update student");
              toast.success("Updated student details")
            };

            return (
              <div
                key={index}
                className="flex px-4 py-4 flex-col gap-2 shadow-md max-w-[350px] w-full rounded-md"
              >
                <p>
                  Student Id{" "}
                  <span className="font-semibold">{student.user_id}</span>
                </p>
                <p>
                  Student Name{" "}
                  <span className="font-semibold">{student.username}</span>
                </p>
                <p>
                  Student Email{" "}
                  <span className="font-semibold">{student.email}</span>
                </p>
                <div className="flex flex-col gap-2 mt-3">
                  <Button variant={"destructive"}>Remove</Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-500 hover:bg-blue-600">
                        Edit Student
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Student</DialogTitle>
                        <DialogDescription>
                          Make changes here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={handleEditStudent}
                        className="grid gap-4 py-4"
                      >
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            onChange={(e) => setEmail(e.target.value)}
                            className="col-span-3"
                          />
                        </div>

                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label htmlFor="password" className="text-right">
                            Password
                          </Label>
                          <Input
                            id="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentGroup;
