import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggel";
import { BellDot, Languages, Menu, Search, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuthStore } from "@/zustand/store";

const Navbar = () => {
  // const {user, updateRole} = useUser()
  // const { user:oauthUser} = useAuth0()
  const {user} = useAuthStore()

  return (
    <header className="sticky top-0 light:bg-gray-100">
      <nav className="z-50 flex items-center justify-between w-full py-2 shadow lg:px-4">
        <Link to={"/"} className="pl-2 text-2xl font-semibold">
          EMS
        </Link>

        {/* Select user Role */}
        {/* <div className="max-w-[300px]">
        <Select onValueChange={(value) => updateRole(user.user_id,value)}>
            <SelectTrigger>
              <SelectValue placeholder={user.role.toUpperCase()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="organizationAdmin">ORG ADMIN</SelectItem>
              <SelectItem value="systemAdmin">SYSTEM ADMIN</SelectItem>
              <SelectItem value="instructor">INSTRUCTOR</SelectItem>
              <SelectItem value="student">STUDENT</SelectItem>
            </SelectContent>
        </Select>
        </div> */}

        {/* nav items */}
        <div className="items-center hidden gap-4 md:flex">
          <div className="flex items-center h-10 gap-1 px-5 py-1 border-2 rounded-full">
            <input
              type="text"
              placeholder="Search Context"
              className="bg-transparent border-none focus:border-none focus:outline-none focus-visible:ring-0"
            />
            <Search size={16} cursor={"pointer"} /> {/* Add states*/}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="cursor-pointer nav-item">
                <Languages size={18} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Russian</DropdownMenuItem>
              <DropdownMenuItem>Turkish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to={"/notification"} className="nav-item">
            <BellDot size={18} />
          </Link>

          <div className="nav-item">
            <ModeToggle />
          </div>

          <Link to={"/settings"} className="nav-item">
            <Settings size={18} />
          </Link>

          {user && <Link to={"/profile"} className="overflow-hidden nav-item">
            <img
              src={user.picture}
              alt=""
              className="bg-cover"
            />
          </Link>}
        </div>

        {/* nav item in small devices */}
        <div className="flex gap-3 md:hidden">
          {/* Toggle Theme */}
          <div className="block md:hidden">
            <ModeToggle />
          </div>

          {/* Dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="mr-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/settings"}>Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/notification"}>Notification</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
