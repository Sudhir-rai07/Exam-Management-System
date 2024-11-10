import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { BookCheck, ChartLine, ChevronUp, FileQuestion, Info, LayoutGrid, PresentationIcon, Sheet, User, User2, Users } from "lucide-react";
import { Link } from "react-router-dom";

type MenuItemType = {
  title: string;
  url: string;
  icon: React.ReactNode;
};
const userMenuItems: MenuItemType[] = [
    {
      title: "Instructors",
      url: "/instructors",
      icon: <PresentationIcon />,
    },
    {
      title: "Students",
      url: "/students",
      icon: <User />,
    },
    {
      title: "Organisation",
      url: "organisation",
      icon: <Users />,
    },
  ];

  const examMenuItems: MenuItemType[] = [
    {
        title: "Test Bank",
        url: "/test-bank",
        icon: <BookCheck />,
      }, {
        title: "Questions",
        url: "/questiions",
        icon: <FileQuestion />,
      }, {
        title: "Exam info",
        url: "/exam-info",
        icon: <Info />,
      },{
        title: "Grade",
        url: "/grade",
        icon: <ChartLine />,
      },
  ]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>
          <LayoutGrid size={20} className="mr-2" />
          <span className="text-lg">User</span>
        </SidebarGroupLabel>
        <SidebarGroupContent className="pl-4">
          <SidebarMenu>
            {userMenuItems.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  {/* {item.title} */}
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>

        <SidebarGroup />
        <SidebarGroupLabel>
          <Sheet size={20} className="mr-2" />
          <span className="text-lg">Exam</span>
        </SidebarGroupLabel>
        <SidebarGroupContent className="pl-4">
          <SidebarMenu>
            {examMenuItems.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  {/* {item.title} */}
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>


      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <Link to={"/profile"}>Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      
    </Sidebar>
  );
}
