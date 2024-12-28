import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="px-[8%] h-[95vh] w-full flex items-center">
      <div className="z-500">
        <div>
          <div>
            <h4 className="font-bold leading-[50px]">
              Mastery Meets Merit – Certifying Top-Tier Mentors at Colegio de San Gabriel Arcangel
            </h4>
          </div>
          <div className="pt-5">
            <span className="text-primary">
              Push Boundaries. Prove Excellence. Earn Your Certification.
            </span>
          </div>
          <div>
            <div className="flex space-x-5 mt-10">
              <Button className="hover:bg-secondary">Learn More</Button>
              <Button variant="ghost">Meet The Team</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-primary w-[600px] h-[800px] blur-[350px]"></div>
      </div>
    </div>
  );
};

export default Home;
