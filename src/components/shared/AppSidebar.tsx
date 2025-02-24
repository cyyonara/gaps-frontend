import { LayoutDashboard, Book, Building, BookOpenCheck } from "lucide-react";
import { NavMain } from "@/components/sidebar/NavMain";
import { NavUser } from "@/components/sidebar/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import gapsIcon from "@/assets/icon.png";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Departments",
      url: "/departments",
      icon: Building,
    },
    {
      title: "Courses",
      url: "/courses",
      icon: Book,
    },
    {
      title: "Assessments",
      url: "/assessments",
      icon: BookOpenCheck,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-x-2 justify-center py-4">
          <img src={gapsIcon} alt="gaps-icon" className="w-[100px]" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
