import Navigation from "@/components/landing-page/Navigation";
import Home from "@/components/landing-page/pages/Home";
import AboutUs from "@/components/landing-page/pages/AboutUs";
import MissionAndVision from "@/components/landing-page/pages/MissionAndVision";
import { Element } from "react-scroll";
import MyTeam from "@/components/landing-page/pages/MyTeam";
const LandingPage = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <header className="sticky top-0 m-auto w-full px-[8%]">
        <Navigation />
      </header>
      <main className="flex-grow">
        <Element name="home">
          <Home />
        </Element>
        <Element name="aboutUs">
          <AboutUs />
        </Element>
        <Element name="missionAndVision">
          <MissionAndVision />
        </Element>
        <Element name="myTeam">
          <MyTeam />
        </Element>
      </main>
      <footer className="w-full py-10 px-[8%] bg-primary">footer</footer>
    </div>
  );
};

export default LandingPage;
