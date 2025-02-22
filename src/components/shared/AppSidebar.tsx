import { LayoutDashboard, Book, Building, NotepadText, Users } from "lucide-react";
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
import { title } from "process";
import { url } from "inspector";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
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
      icon: NotepadText,
    },
    {
      title: "Users",
      url: "/users",
      icon: Users,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="bg-black shadow-xl">
      <SidebarHeader>
        <div className="flex items-center gap-x-5 py-4 pl-2">
          <img src={gapsIcon} alt="gaps-icon" className="w-[100px]" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
