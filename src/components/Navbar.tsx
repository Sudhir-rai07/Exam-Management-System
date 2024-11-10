import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggel";
import {
  BellDot,
  Languages,
  Menu,
  Search,
  Settings,
  Sidebar,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <header>
      <nav className="z-50 flex items-center justify-between w-full px-4 py-2 shadow">
        <div className="text-2xl font-semibold">EMS</div>

        {/* nav items */}
        <div className="items-center hidden gap-4 md:flex">
          <div className="flex items-center h-10 px-5 py-1 bg-gray-200 rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none"
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

          <Link to={"/profile"} className="overflow-hidden nav-item">
            <img
              src="https://placecats.com/bella/300/300"
              alt=""
              className="bg-cover"
            />
          </Link>
        </div>

        {/* nav item in small devices */}
        <div className="flex gap-3 md:hidden">
          {/* Search Form */}
          <div className="flex items-center h-10 px-5 py-1 bg-gray-200 rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none"
            />
            <Search size={16} cursor={"pointer"} /> {/* Add states*/}
          </div>

          {/* Toggle Theme */}
          <div className="block md:hidden">
            <ModeToggle />
          </div>

          {/* Dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
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
