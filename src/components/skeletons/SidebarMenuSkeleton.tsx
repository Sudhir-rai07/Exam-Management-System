import { SidebarMenu, SidebarMenuItem } from "../ui/sidebar"

const SidebarMenuSkeleton = () => {
    return (
        <SidebarMenu>
          {Array.from({ length: 5 }).map((_, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuSkeleton />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      )
}

export default SidebarMenuSkeleton