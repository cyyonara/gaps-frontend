interface Props {
  title: string;
  description: string;
}

const Headings = ({ title, description }: Props) => {
  return (
    <div className="leading-tight">
      <h6 className="font-semibold text-primary">{title}</h6>
      <span className="text-sm">{description} </span>
    </div>
  );
};

export default Headings;
