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
import { Building2, ChevronUp, CopyCheck, FileQuestion, GraduationCap, Grid2X2, Info, LayoutGrid, Plus, Sheet, User, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useUser } from "@/zustand/store";

type MenuItemType = {
  title: string;
  url: string;
  icon: React.ReactNode;
};


//  Exam --> Question ExamInfo
const teacherMenuItems1 : MenuItemType[] = [
  {
    title: "Questions",
    url: "/teacher/questions",
    icon: <FileQuestion />,
  },
  {
    title: "Exam Info",
    url: "/teacher/exam-info",
    icon: <Info />,
  }  ,{
    title: "Create Exam",
    url: "/teacher/exam-info/create/basic",
    icon: <Plus />,
  }
]
const teacherMenuItems2 : MenuItemType[] = [
  {
    title: "ValidateAnswers",
    url: "/teacher/validate-answers",
    icon: <CopyCheck />,
  },
  {
    title: "Feedback",
    url: "/teacher/feedback",
    icon: <Info />,
  },
]


const studentMenuItems: MenuItemType[] = [
  {
    title: "Exam",
    url: "/student/exam",
    icon: <Info />,
  },{
    title: "Grade",
    url: "/student/grade",
    icon: <GraduationCap />,
  }
]

const systemAdminMenuItmesUser : MenuItemType[] = [
        // {
        //   title: "Instructors",
        //   url: "/admin/instructors",
        //   icon: <User />,
        // },{
        //   title: "Students",
        //   url: "/admin/students",
        //   icon: <User />,
        // },
        {
          title: "Organisation",
          url: "/admin/organisation",
          icon: <Building2 />,
        },
        {
            title: "Admins",
            url: "/admin/organisations",
            icon: <User />,
          },
]

const adminMenuItmesExam : MenuItemType[] = [
  {
    title: "TestBank",
    url: "/admin/test-bank",
    icon: <User />,
  },{
    title: "Questions",
    url: "/teacher/questions",
    icon: <FileQuestion />,
  },{
    title: "Exam Info",
    url: "/teacher/exam-info",
    icon: <Info />,
  },
  {
    title: "Grade",
    url: "/student/grade",
    icon: <GraduationCap />,
  },
]





const sidebarContent = (role: string) =>{
       if(role === 'teacher')
          return (<>
           <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>
          <LayoutGrid size={20} className="mr-2" />
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
                      {item.icon}
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
          <span className="text-lg">PostExam</span>
        </SidebarGroupLabel>
        <SidebarGroupContent className="pl-4">
          <SidebarMenu>
            {teacherMenuItems2.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  {/* {item.title} */}
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
          </>)


if(role === 'student'){
  return (
    <>
    <SidebarContent>
      <SidebarGroup />
      {studentMenuItems.map((value)=>{
        return (
          <SidebarGroupLabel key={value.url}>
          <Grid2X2 />
          <Link to={value.url} className="flex items-center gap-1 text-lg">{value.title}</Link>
        </SidebarGroupLabel>
        )
      })}
    </SidebarContent>
    </>
  )
}

if(role === 'systemAdmin'){
  return (
    <>
    <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>
          <LayoutGrid size={20} className="mr-2" />
          <span className="text-lg">User</span>
        </SidebarGroupLabel>
        <SidebarGroupContent className="pl-4">
          <SidebarMenu>
            {systemAdminMenuItmesUser.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  {/* {item.title} */}
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      {item.icon}
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
            {adminMenuItmesExam.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  {/* {item.title} */}
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </>
  )
}
}

export function AppSidebar() {
    const {user} = useUser()
    console.log(user?.role)
    
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
