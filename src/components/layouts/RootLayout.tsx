import { SidebarProvider, SidebarInset } from "../ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/shared/AppSidebar";
import Header from "../shared/Header";

const RootLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default RootLayout;
