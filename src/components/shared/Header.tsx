import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Toggle } from "../ui/toggle";
import { Sun, Moon } from "lucide-react";
import useTheme from "@/hooks/states/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 mb-6">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Courses</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mr-4">
        <Toggle onClick={toggleTheme}>{theme === "dark" ? <Moon /> : <Sun />}</Toggle>
      </div>
    </header>
  );
};

export default Header;
