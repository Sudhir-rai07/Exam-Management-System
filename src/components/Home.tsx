import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

const Home = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full min-h-full bg-[#fafafa] dark:bg-[#18181b]">
        <Navbar />
        <SidebarTrigger />
        <Breadcrumbs />

        {/* Outlet */}
        <section 
      className="flex-1 w-full px-4">
      <Outlet />
    </section>
      </div>
    </SidebarProvider>
  );
};

export default Home;
