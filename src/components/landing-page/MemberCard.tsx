import { Card } from "../ui/card";

interface Props {
  image: string;
  name: string;
}
const MemberCard = ({ image, name }: Props) => {
  return (
    <Card className="flex w-[250px] flex-col items-center justify-center p-5">
      <div>
        <img className="h-[250px] rounded-full" src={image} alt={name} />
      </div>
      <span className="text-primary">{name}</span>
    </Card>
  );
};

export default MemberCard;
