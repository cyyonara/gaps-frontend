import logo from "../../assets/icon.png";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaUser } from "react-icons/fa";

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);

      setIsAtTop(window.scrollY === 0);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    {
      href: "home",
      label: "Home",
    },
    {
      href: "aboutUs",
      label: "About Us",
    },

    {
      href: "missionAndVision",
      label: "Mission & Vision",
    },
  ];

  return (
    <>
      <nav
        className={` px-[8%] flex justify-between items-center py-8 transition-transform duration-300 w-full ${
          showNav ? (isAtTop ? "" : "bg-white shadow-md") : "-translate-y-full"
        } `}
      >
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
              <Link to="/login" className="cursor-pointer" > 
                <div className="py-2 px-5 text-sm text-white flex items-center gap-x-2 rounded-full bg-primary">
                  <FaUser size={12} className="text-background" />
                  Login
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
