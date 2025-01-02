import mission from "../../../assets/mission.png";
import vision from "../../../assets/vision.png";
import MissionAndVisionCard from "../MissionAndVisionCard";

const MissionAndVision = () => {
  const cards = [
    {
      title: "Our Mission",
      description:
        "Our mission at Colegio de San Gabriel is to provide a comprehensive and innovative web-based platform, GAPS, that allows our professors to assess and enhance their teaching capabilities through targeted assessments. By facilitating these evaluations, we ensure our educators are well-equipped to deliver exceptional education and earn certification for their proficiency in specific program courses.",
      icon: "mission",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to establish GAPS at Colegio de San Gabriel as a beacon of educational excellence where continuous professional development is seamlessly integrated into our academic framework. We aspire to create an environment where our educators are perpetually empowered to excel in their teaching roles, thereby fostering a culture of excellence and lifelong learning.",
      icon: "vision",
    },
  ];

  return (
    <div className="px-[8%] h-[100vh] flex flex-col justify-center items-center">
      <div>
        <h3 className="font-bold pb-5">
          What We <span className="text-primary">Strive</span> For
        </h3>
        <div className="w-[50%]">
          <span>
            We are dedicated to creating an exceptional learning environment that enhances
            instructors' skills through thorough evaluations and certifications. Our mission is to
            empower teachers, foster excellence, and integrate lifelong professional development
            into our academic framework.
          </span>
        </div>
      </div>
      <div className="flex sm:flex-col gap-10 mt-10 justify-items-center">
        {cards.map((card) => (
          <MissionAndVisionCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MissionAndVision;
