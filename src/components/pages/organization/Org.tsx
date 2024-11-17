import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@/Types/types";
import {
  useOrganizationAdminStore,
  useOrganizationStore,
} from "@/zustand/store";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Org = () => {
  const { organizations } = useOrganizationStore();
  const { editAdmin, removeAdmin } = useOrganizationAdminStore();
  const org1 = organizations[0];


  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRemoveAdmin = (id: number | string): void => {
    removeAdmin(id);
    toast.success("Admin removed");
  };

  return (
    <div>
      <h1>ORG DETAILS</h1>

      <div className="mt-8">
        <p className="font-semibold">
          <span className="text-gray-400">OrgId:</span> {org1.org_id}
        </p>
        <p className="font-semibold">
          <span className="text-gray-400">OrgName:</span> {org1.name}
        </p>
        <p className="font-semibold">
          <span className="text-gray-400">OrgDescription:</span>{" "}
          {org1.description}
        </p>

        {/* Add Admin Dialog */}
        <div className="flex items-center justify-end gap-4">
          <Dialog>
            <DialogTrigger asChild> 
              <Button variant="outline" className="flex ml-auto">Add admin</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add admin</DialogTitle>
                <DialogDescription>
                  Make changes here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="username" className="text-right">
                    username
                  </Label>
                  <Input
                    id="username"
                    type="username"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="username"
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className="col-span-3"
                  />
                </div>

                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="text"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button className="bg-blue-500 hover:bg-blue-600"><Link to={`statistics`}>See statistics</Link></Button>
        </div>

        {org1.admins?.length == 0 && <h2>No admin this organization</h2>}
      </div>
      <div className="mt-6 font-semibold">Admins:</div>
      {(org1.admins || 0) &&
        org1.admins?.map((admin: User) => {
          const [adminName, setAdminName] = useState(admin.username);
          const [adminEmail, setAdminEmail] = useState(admin.email);

          const handleEditAdmin = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // YOUR API HERE
            console.log(adminName, adminEmail);
            editAdmin(admin.user_id, {
              username: adminName,
              email: adminEmail,
            });
            toast.success("Changes Saved")
          };

          return (
              <div key={admin.user_id} className="flex items-center justify-between w-full gap-3 mt-4 md:w-1/2">
                <p className="mr-8 text-lg font-semibold">{admin.username}</p>

                <Button
                  variant={"destructive"}
                  onClick={() => handleRemoveAdmin(admin.user_id)}
                >
                  Remove
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-500 hover:bg-blue-600">Edit Admin</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Admin</DialogTitle>
                      <DialogDescription>
                        Make changes here. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={handleEditAdmin}
                      className="grid gap-4 py-4"
                    >
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={adminName}
                          onChange={(e) => setAdminName(e.target.value)}
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="email" className="text-right">
                          email
                        </Label>
                        <Input
                          id="email"
                          value={adminEmail}
                          onChange={(e) => setAdminEmail(e.target.value)}
                          defaultValue="@peduarte"
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
          );
        })}
    </div>
  );
};

export default Org;
