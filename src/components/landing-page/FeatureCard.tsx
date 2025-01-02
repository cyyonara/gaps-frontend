import { Card } from "../ui/card";
import { FaNoteSticky } from "react-icons/fa6";
import { IconType } from "react-icons";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";

interface Props {
  title: string;
  description: string;
  icon: string;
}

const iconMapping: { [key: string]: IconType } = {
  FaNoteSticky: FaNoteSticky,
  AiFillSafetyCertificate: AiFillSafetyCertificate,
  TbCertificate: TbCertificate,
};

const FeatureCard = ({ title, description, icon }: Props) => {
  const IconComponent = iconMapping[icon];
  return (
    <Card className="flex flex-col p-5 bg-transparent transform transition duration-300 hover:translate-y-[-15px] hover:shadow-xl">
      <div className="flex flex-col items-start gap-5 pb-2">
        <div className="p-3 bg-secondary rounded-full">
          {IconComponent && <IconComponent className=" text-background" size={32} />}
        </div>
        <span className="font-semibold text-[25px] flex justify-center">{title}</span>
      </div>
      <span>{description}</span>
    </Card>
  );
};

export default FeatureCard;
