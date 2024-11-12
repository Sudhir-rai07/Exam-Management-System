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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Item } from "@radix-ui/react-dropdown-menu";
import { Building2, ChevronUp, CopyCheck, FileQuestion, GraduationCap, Grid2X2, Info, LayoutGrid, PresentationIcon, Sheet, User, User2, Users } from "lucide-react";
import { Link } from "react-router-dom";

type MenuItemType = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

 const role = 'teacher'

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
  },
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
    title: "Exam Info",
    url: "/student/exam",
    icon: <Info />,
  },{
    title: "Grade",
    url: "/student/grade",
    icon: <GraduationCap />,
  }
]

const adminMenuItmesUser : MenuItemType[] = [
        {
          title: "Instructors",
          url: "/admin/instructors",
          icon: <User />,
        },{
          title: "Students",
          url: "/admin/students",
          icon: <User />,
        },{
          title: "Organisation",
          url: "/admin/organisation",
          icon: <Building2 />,
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

if(role === 'admin'){
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
            {adminMenuItmesUser.map((item) => {
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

// const userMenuItems: MenuItemType[] = [
//     {
//       title: "Instructors",
//       url: "/admin/user/instructors",
//       icon: <PresentationIcon />,
//     },
//     {
//       title: "Students",
//       url: "/user/students",
//       icon: <User />,
//     },
//     {
//       title: "Organisation",
//       url: "/admin/user/organisation",
//       icon: <Users />,
//     },
//   ];


  

  // const examMenuItems: MenuItemType[] = [
  //   {
  //       title: "Test Bank",
  //       url: "/test-bank",
  //       icon: <BookCheck />,
  //     }, {
  //       title: "Questions",
  //       url: "/questions",
  //       icon: <FileQuestion />,
  //     }, {
  //       title: "Exam info",
  //       url: "/teacher/exam-info",
  //       icon: <Info />,
  //       // THIS PART IS FOR TEACHER
  //     },{
  //       title: "Grade",
  //       url: "/student/grade",
  //       icon: <ChartLine />,
  //     },
  // ]

 

export function AppSidebar() {
  return (
    <Sidebar>
      {sidebarContent(role)}

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
