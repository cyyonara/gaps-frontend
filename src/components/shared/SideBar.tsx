import gaps from "../../assets/gaps.png";
import {
  Sidebar,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "../ui/sidebar";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { VscKebabVertical } from "react-icons/vsc";
import { IoBook } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const { open } = useSidebar();
  const sidebarItems = [
    {
      title: "Courses",
      icon: <IoBook />,
      url: "dean/courses",
    },
    {
      title: "Assessments",
      icon: <IoIosPaper />,
      url: "dean/assessments",
    },
  ];

  return (
    <Sidebar
      collapsible="icon"
      className={`border-none bg-white transition-all duration-300 ${
        open ? "w-64 p-4" : "w-16 p-2"
      }`}
    >
      <SidebarHeader className="bg-white">
        <div className="flex items-center gap-x-2">
          <img src={gaps} alt="gaps-logo" className="w-[40px]" />
          {open && (
            <div className="flex flex-col leading-tight">
              <span className="text-primary font-semibold text-[20px]">GAPS</span>
              <span className="text-xs">Lorem ipsum, dolor</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white w-full">
        <SidebarGroup
          className={`p-0 flex items-center ${open ? "justify-between" : "justify-center"} ${
            open ? "pt-10" : "pt-14"
          }`}
        >
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <NavLink to={item.url} key={item.title} className="w-full">
                  <SidebarMenuItem className="w-full">
                    <SidebarMenuButton
                      className={`hover:text-primary flex w-full rounded-md p-2 transition-all duration-300 ${
                        open ? "justify-start gap-3" : "justify-center"
                      }`}
                    >
                      <div className="flex justify-center items-center w-10 h-10">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      {open && <span className="font-medium">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </NavLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-white p-1 hover:bg-sidebar-accent duration-200 rounded-md">
        <div className={`flex items-center ${open ? "justify-between" : "justify-center"}`}>
          <div className={`flex items-center ${open ? "space-x-1" : "justify-center w-full"}`}>
            <Avatar
              className={`bg-slate-100 flex items-center justify-center ${open ? "w-10 h-10" : "w-7 h-7"}`}
            >
              <AvatarImage src="nfgernger" alt="avatar icon" />
              <FaUser className="text-primary absolute" size={open ? 18 : 15} />
            </Avatar>
            {open && <span className="font-semibold text-sm">Dean</span>}
          </div>

          {open && (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center">
                <VscKebabVertical />
                <DropdownMenuContent side="right" className="w-48">
                  <Link to="/dean/profile">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuTrigger>
            </DropdownMenu>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
