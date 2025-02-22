import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CustomButton from "../common/CustomButton";

const RecentActivityCard = () => {
  const mentors = [
    {
      name: "Jane Doe",
      college: "College of Computer Studies",
      avatarUrl: "https://github.com/shadcn.png",
    },
    {
      name: "John Doe",
      college: "College of Business",
      avatarUrl:
        "https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175928.jpg?ga=GA1.1.441843691.1718038895&semt=ais_hybrid",
    },
    {
      name: "Jhoanna Doe",
      college: "College of Engineering",
      avatarUrl:
        "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?ga=GA1.1.441843691.1718038895&semt=ais_hybrid",
    },
    {
      name: "Jane Doe",
      college: "College of Computer Studies",
      avatarUrl:
        "https://img.freepik.com/free-vector/woman-floral-traditional-costume_1308-176159.jpg?ga=GA1.1.441843691.1718038895&semt=ais_hybrid",
    },
    {
      name: "John Doe",
      college: "College of Business",
      avatarUrl:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?ga=GA1.1.441843691.1718038895&semt=ais_hybrid",
    },
    {
      name: "Nicollete Doe",
      college: "College of Engineering",
      avatarUrl:
        "https://img.freepik.com/free-vector/woman-traditional-costume_1308-175787.jpg?ga=GA1.1.441843691.1718038895&semt=ais_hybrid",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>List of mentors who recently took an assessment</CardDescription>
      </CardHeader>
      <CardContent>
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b border-bottom-muted-foreground"
          >
            <div className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage src={mentor.avatarUrl} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold leading-none">{mentor.name}</p>
                <p className="text-xs text-muted-foreground">{mentor.college}</p>
              </div>
            </div>
            <CustomButton variant="ghost" className="md:mt-0">
              View Profile
            </CustomButton>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
