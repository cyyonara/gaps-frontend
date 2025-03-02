import { Card, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UpdateProfilePictureCard from "./UpdateProfilePictureCard";

const ProfileCard = () => {
  return (
    <Card className="flex w-[30%] flex-col items-center justify-between ">
      <CardHeader>
        <div className="flex flex-col items-center">
          <Avatar className="size-44">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <UpdateProfilePictureCard />
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileCard;
