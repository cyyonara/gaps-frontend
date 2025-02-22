import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { BiSolidNotification } from "react-icons/bi";

const DeanUpdateChart = () => {
  const data = [
    {
      dean: "John Doe",
      mentor: "Alex Doe",
    },
    {
      dean: "Alice Doe",
      mentor: "Ben Doe",
    },
    {
      dean: "Bob Doe",
      mentor: "Charlie Doe",
    },
    {
      dean: "Charlie Doe",
      mentor: "Dave Doe",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dean Update</CardTitle>
        <CardDescription>Show the recent exam assignment of dean </CardDescription>
      </CardHeader>
      <CardContent className="mt-3 space-y-8 ">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <BiSolidNotification size={35} className="text-primary" />
            <div>
              <div className="text-[16px] font-semibold ">{item.dean}</div>
              <div className="text-xs text-muted-foreground">
                {item.dean} just assigned an exam to {item.mentor}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DeanUpdateChart;
