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
import {
  Book,
  Building2,
  ChevronUp,
  CopyCheck,
  GraduationCap,
  Grid2X2,
  Group,
  Info,
  LayoutGrid,
  Settings,
  Sheet,
  TableOfContents,
  User,
  User2,
  UsersIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useUser } from "@/zustand/store";
import { IoMdSpeedometer } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";

type MenuItemType = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

//  Exam --> Question ExamInfo
const teacherMenuItems1: MenuItemType[] = [
  {
    title: "Questions",
    url: "/teacher/questions",
    icon: <Book />,
  }, {
    title: "Exam info",
    url: "teacher/exam-info",
    icon: <Book />,
  },
];
const teacherMenuItems2: MenuItemType[] = [
  {
    title: "Validate Exam",
    url: "teacher/validate-answers",
    icon: <CopyCheck />,
  },
  {
    title: "Feedback",
    url: "/teacher/feedback",
    icon: <Info />,
  },
];

const studentMenuItems: MenuItemType[] = [
  {
    title: "Exam",
    url: "/student/exam",
    icon: <LayoutGrid />,
  },
  {
    title: "Grade",
    url: "/student/grade",
    icon: <LayoutGrid />,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: <LayoutGrid />,
  }
];

const systemAdminMenuItmes: MenuItemType[] = [
  {
    title: "Instructors",
    url: "system-admin/user/instructors",
    icon: <User />,
  },
  {
    title: "Students",
    url: "system-admin/user/students",
    icon: <User />,
  },
  {
    title: "Organisation",
    url: "system-admin/user/organisation",
    icon: <Building2 />,
  },
];

const organizationAdminMenuItmes: MenuItemType[] = [
  {
    title: "Instructors",
    url: "/organization-admin/user/instructors",
    icon: <User />,
  },
  {
    title: "Students",
    url: "/organization-admin/user/students",
    icon: <UsersIcon />,
  },
  {
    title: "Organisation",
    url: "/organization-admin/user/organisation",
    icon: <Building2 />,
  },
  // {
  //   title: "Admins",
  //   url: "/admin/organisations",
  //   icon: <User />,
  // },
  // {
  //   title: "Student Groups",
  //   url: "/admin/student/groups",
  //   icon: <Group />,
  // },
  // {
  //   title: "Test Banks",
  //   url: "/admin/test-banks",
  //   icon: <Book />,
  // },
  // {
  //   title: "Questions",
  //   url: "/admin/questions",
  //   icon: <Book />,
  // },
];

const organizationAdminMenuItmes2: MenuItemType[] = [
  {
    title: "TestBank",
    url: "organization-admin/user/test-bank",
    icon: <Info />,
  },
  {
    title: "Questions",
    url: "organization-admin/user/questions/",
    icon: <Info />,
  },
  {
    title: "Exam Info",
    url: "organization-admin/exam-info",
    icon: <GraduationCap />,
  },
  {
    title: "Grade",
    url: "organization-admin/grade",
    icon: <GraduationCap />,
  },
]

// SIDEBAR ITEMS
const sidebarContent = (role: string) => {
  if (role === "organizationAdmin")
    return (
      <>
        <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>
        <IoMdSpeedometer size={50}/>
        <Link to="/oragnization-admin" className="flex items-center gap-1 ml-2 text-lg">HomePage</Link>
        </SidebarGroupLabel>
        
          <SidebarGroup />
          <SidebarGroupLabel>
            <LayoutGrid size={20} className="mr-2" />
            <span className="text-lg">User</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-4">
            <SidebarMenu>
              {organizationAdminMenuItmes.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    {/* {item.title} */}
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        {/* {item.icon} */}
                        <span>{item.title}</span>
                      </Link>
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
              {organizationAdminMenuItmes2.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    {/* {item.title} */}
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        {/* {item.icon} */}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroup />
          <SidebarGroupLabel className="">
            <LayoutGrid size={20} className="mr-2" />
            <Link to={'/profile'} className="text-lg">Profile</Link>
          </SidebarGroupLabel>
        </SidebarContent>
      </>
    );

    if(role === "instructor")
      return (
    <>
    <SidebarContent>
    <SidebarGroup />
        <SidebarGroupLabel>
        <IoMdSpeedometer size={50}/>
        <Link to="/teacher" className="flex items-center gap-1 ml-2 text-lg">HomePage</Link>
        </SidebarGroupLabel>
          <SidebarGroup />
          <SidebarGroupLabel>
            <TableOfContents size={24} className="mr-2 text-blue-500 rotate-180" />
            <span className="text-lg">Exam</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-4">
            <SidebarMenu>
              {teacherMenuItems1.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    {/* {item.title} */}
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        {/* {item.icon} */}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroup />
          <SidebarGroupLabel>
            <Settings size={20} className="mr-2" />
            <span className="text-lg">PostExam</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-6">
            <SidebarMenu>
              {teacherMenuItems2.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    {/* {item.title} */}
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        {/* {item.icon} */}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
          
          <SidebarGroup />
          <SidebarGroupLabel className="">
            <LayoutGrid size={20} className="mr-2" />
            <Link to={'/profile'} className="text-lg">Profile</Link>
          </SidebarGroupLabel>
        </SidebarContent>
    </>)

  if (role === "student") {
    return (
      <>
        <SidebarContent>
          <SidebarGroup />
          <SidebarContent>
            <SidebarMenu>
            {studentMenuItems.map((value) => {
            return (
              <SidebarMenuItem key={value.url} className="flex items-center ml-4 space-x-2">
                <IoGridOutline  size={14}/>
                <Link
                  to={value.url}
                  className="flex items-center gap-1 text-lg"
                >
                  {value.title}
                </Link>
              </SidebarMenuItem>
            );
          })}
            </SidebarMenu>
          </SidebarContent>

          <SidebarGroup />
          <SidebarGroupLabel className="">
            <LayoutGrid size={20} className="mr-2" />
            <Link to={'/profile'} className="text-lg">Profile</Link>
          </SidebarGroupLabel>
        </SidebarContent>
      </>
    );
  }

  if (role === "systemAdmin") {
    return (
      <>
        <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>
        <IoMdSpeedometer size={50}/>
        <Link to="/systemadmin" className="flex items-center gap-1 ml-2 text-lg">HomePage</Link>
        </SidebarGroupLabel>

          <SidebarGroup />
          <SidebarGroupLabel>
            <LayoutGrid size={20} className="mr-2" />
            <span className="text-lg">User</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-4">
            <SidebarMenu>
              {systemAdminMenuItmes.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    {/* {item.title} */}
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroup />
          <SidebarGroupLabel className="">
            <LayoutGrid size={20} className="mr-2" />
            <Link to={'/profile'} className="text-xl">Profile</Link>
          </SidebarGroupLabel>
          </SidebarContent>
      </>
    );
  }
};

export function AppSidebar() {
  const { user } = useUser();
  console.log(user?.role);

  return (
    <Sidebar>
      {/* Select user Role */}
      {sidebarContent(user.role)}

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
                <DropdownMenuItem></DropdownMenuItem>
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
