import { Card } from "../ui/card";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";

interface Props {
  title: string;
  description: string;
  icon: string;
}

const MissionAndVisionCard = ({ description, icon, title }: Props) => {
  const iconMapping: { [key: string]: string } = {
    mission: mission,
    vision: vision,
  };

  const IconSrc = iconMapping[icon];

  return (
    <Card className="shadow-none p-10 flex items-center justify-between bg-transparent border-none gap-x-10 w-[80%]">
      <div className="w-[180px]">
        {IconSrc && (
          <img className="h-20 w-50 object-cover rounded-full" src={IconSrc} alt={title} />
        )}
      </div>
      <div className="flex flex-col items-start gap-2 pb-2">
        <span className="font-bold text-[25px] flex justify-center">{title}</span>
        <span>{description}</span>
      </div>
    </Card>
  );
};

export default MissionAndVisionCard;
