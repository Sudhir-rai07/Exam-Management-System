import { AppSidebar } from "./app-sidebar";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

const Home = () => {

    
    
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full h-full">
        <Navbar />
        <SidebarTrigger />
        <Breadcrumbs />
      </div>
    </SidebarProvider>
  );
};

export default Home;
