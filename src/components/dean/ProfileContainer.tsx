import { Card } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const ProfileContainer = () => {
  return (
    <Card className="w-[90%] border-none p-8 flex flex-col space-y-4">
      <div className="w-fit flex flex-col items-center gap-y-2">
        <Avatar className="w-32 h-32 items-center justify-center bg-slate-300">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs">Upload Picture</span>
      </div>
      <div className="pt-8 flex space-x-32">
        <div className="felx flex-col space-y-4">
          <div className="flex flex-col leading-8">
            <span className="text-xs">Name</span>
            <span className="font-semibold">John Doe</span>
          </div>
          <div className="flex flex-col leading-8">
            <span className="text-xs">E-mail Address</span>
            <span className="font-semibold">johndoe@example.com</span>
          </div>
          <div className="flex flex-col leading-8">
            <span className="text-xs">Department</span>
            <span className="font-semibold">Computer Studies</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col leading-8">
            <span className="text-xs">User-type</span>
            <span className="font-semibold">Dean</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileContainer;
