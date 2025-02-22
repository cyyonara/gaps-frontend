import { Card } from "../ui/card";

interface Props {
  title: string;
  description: string;
  number: number;
}

const NumberCard = ({ description, title, number }: Props) => {
  return (
    <Card className="flex flex-col p-4 space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
      <div className="leading-tight ">
        <h1 className="text-[17px] font-semibold">{title}</h1>
        <div className="text-xs text-muted-foreground"> {description}</div>
      </div>
      <div className="text-[35px] font-bold text-primary">{number}</div>
    </Card>
  );
};

export default NumberCard;
