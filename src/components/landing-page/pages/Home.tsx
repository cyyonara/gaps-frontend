import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div className="relative m-auto px-[8%] h-[100vh] w-full flex-col">
      <div className="flex pt-[15%]">
        <div>
          <div>
            <div className="w-[1000px]">
              <h4 className="font-bold leading-[55px]">
                Mastery Meets Merit – Certifying{" "}
                <span className="text-primary"> Top-Tier Mentors</span> at Colegio de San Gabriel
                Arcangel
              </h4>
            </div>
            <div className="pt-5">
              <span className="text-primary tracking-wider">
                Push Boundaries. Prove Excellence. Earn Your Certification.
              </span>
            </div>
            <div>
              <div className="flex space-x-5 mt-10">
                <ScrollLink to="aboutUs" smooth={true} duration={500}>
                  <Button>Learn More</Button>
                </ScrollLink>
                <ScrollLink to="myTeam" smooth={true} duration={500}>
                  <Button variant="outline">Meet The Team</Button>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>

        <div>{/* <div className="bg-primary w-[600px] h-[800px] blur-[350px]"></div> */}</div>
      </div>
      <h5 className="absolute left-1/2 transform -translate-x-1/2 bottom-5 bg-primary mb-5 text-white font-medium  w-[70%] rounded-md p-10 flex justify-center">
        Designed for Excellence, Built with Care.
      </h5>
    </div>
  );
};

export default Home;
