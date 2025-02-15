import MemberCard from "../MemberCard";
import avatar1 from "../../../assets/avatar1.png";
import avatar4 from "../../../assets/avatar4.png";
import avatar5 from "../../../assets/avatar5.png";

const MyTeam = (): JSX.Element => {
  const cardLabels = [
    {
      image: avatar4,
      name: "Cyrel Villanueva",
    },
    {
      image: avatar1,
      name: "Marinelle Ando",
    },
    {
      image: avatar4,
      name: "Ben Joseph Nuñez",
    },
    {
      image: avatar4,
      name: "Cydhen Avena",
    },
    {
      image: avatar1,
      name: "Nicole Alliana Ebajo",
    },
    {
      image: avatar5,
      name: "David Julian Marquez",
    },
    {
      image: avatar4,
      name: "Lyan Gabriel Marquez",
    },
    {
      image: avatar5,
      name: "Ronnie Tabiano",
    },
  ];
  return (
    <div className="h-[100vh] pb-20 px-[8%] flex flex-col gap-5 justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-5">
        <h3 className="font-bold">
          Meet the <span className="text-primary">Team</span>
        </h3>
        <span className="text-center w-[50%]">
          Here, we introduce you to the talented team behind our innovative platform. Our developers
          have worked tirelessly to create GAPS, empowering professors through comprehensive
          assessments and certifications. Get to know the brilliant minds who brought this project
          to life and their commitment to enhancing educational excellence
        </span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cardLabels.map((card) => (
          <MemberCard key={card.name} image={card.image} name={card.name} />
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
