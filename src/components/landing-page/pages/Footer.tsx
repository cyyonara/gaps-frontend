import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="flex w-full gap-x-32 px-[8%] pt-10">
        <div className="flex flex-1 flex-col gap-y-20">
          <div>
            <span className="text-[25px] tracking-wider text-white font-bold">GAPS</span>
            <p className="max-w-[400px] text-sm">
              Push Boundaries. Prove Excellence. Earn Your Certification.
            </p>
          </div>
          <div>
            <span className="mt-10 text-sm">@2025 All rights reserved.</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <span className="text-[17px] font-medium tracking-wider">Send us your feedback!</span>
          <p className="text-sm">Write us a message and send us your feedback.</p>
          <div className="flex h-[100px] w-[70%] items-end justify-end gap-x-5 border-b">
            <input
              type="text"
              placeholder="Write your message"
              className="flex-1 bg-transparent text-sm font-light outline-none placeholder:text-white"
            />
            <span className="text-sm font-medium">Send</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col font-normal text-sm">
          <ScrollLink to="home" smooth={true} duration={500}>
            <span className="cursor-pointer">Home</span>
          </ScrollLink>
          <ScrollLink to="aboutUs" smooth={true} duration={500}>
            <span className="cursor-pointer">About Us</span>
          </ScrollLink>
          <ScrollLink to="missionAndVision" smooth={true} duration={500}>
            <span className="cursor-pointer">Mission and Vision</span>
          </ScrollLink>
          <ScrollLink to="myTeam" smooth={true} duration={500}>
            <span className="cursor-pointer">My Team</span>
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
