import logo from "../../assets/icon.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaUser } from "react-icons/fa";

const Navigation = () => {
  const navLinks = [
    {
      href: "home",
      label: "Home",
    },
    {
      href: "aboutUs",
      label: "About Us",
    },
    // {
    //   href: "features",
    //   label: "Features",
    // },
    {
      href: "missionAndVision",
      label: "Mission & Vision",
    },
  ];

  return (
    <>
      <nav className="flex justify-between items-center py-10">
        <RouterLink to="home" className="w-[100px]">
          <img src={logo} alt="gaps-logo" />
        </RouterLink>
        <div>
          <div>
            <div className="flex space-x-10 items-center">
              {navLinks.map(({ label, href }) => (
                <ScrollLink
                  to={href}
                  smooth={true}
                  duration={500}
                  key={href}
                  className="cursor-pointer text-sm font-normal"
                >
                  {label}
                </ScrollLink>
              ))}
              <div className="py-2 px-5 text-sm text-white flex items-center gap-x-2 rounded-full bg-primary">
                <FaUser size={12} className="text-background" />
                Login
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
