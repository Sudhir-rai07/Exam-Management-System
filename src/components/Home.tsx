import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

const Home = () => {
    
    
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full h-screen bg-[#fafafa] dark:bg-[#18181b]">
        <Navbar />
        <SidebarTrigger />
        <Breadcrumbs />

        {/* Outlet */}
        <section className="h-[85%] px-4 mt-5 mx-4">
        <Outlet />
    </section>
      </div>
    </SidebarProvider>
  );
};

export default Home;
