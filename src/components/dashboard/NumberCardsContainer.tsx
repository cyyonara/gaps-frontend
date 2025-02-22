import NumberCard from "./NumberCard";

const numberCardInfos = [
  {
    number: 120,
    title: "Mentors",
    description: "Number of mentors registered in the system.",
  },
  {
    number: 50,
    title: "Admin",
    description: "Number of admin registered in the system.",
  },
  {
    number: 20,
    title: "Dean",
    description: "Number of dean registered in the system.",
  },
];

const NumberCardsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-3">
      {numberCardInfos.map((info) => (
        <NumberCard key={info.title} {...info} />
      ))}
    </div>
  );
};

export default NumberCardsContainer;
