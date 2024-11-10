import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

const Home = () => {

    
    
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full h-screen bg-gray-100">
        <Navbar />
        <SidebarTrigger />
        <Breadcrumbs />

        {/* Outlet */}
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default Home;
