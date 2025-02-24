import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Toggle } from "@/components/ui/toggle";
import { Sun, Moon } from "lucide-react";
import useTheme from "@/hooks/states/useTheme";
import useBreadcrumbContent from "@/hooks/states/useBreadcrumbContent";
import React from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { content } = useBreadcrumbContent();

  return (
    <header className="flex h-16 shrink-0 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 mb-6 border-b">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {content.map((con, i) => (
              <React.Fragment key={i.toString()}>
                <BreadcrumbItem>{con}</BreadcrumbItem>
                {i + 1 <= content.length && i + 1 !== content.length ? (
                  <BreadcrumbSeparator />
                ) : (
                  <></>
                )}
              </React.Fragment>
            ))}
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
