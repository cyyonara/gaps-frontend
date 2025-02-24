import useGetUsers from "@/hooks/api/useGetUsers";
import { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CustomInput from "../common/CustomInput";
import { Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { IUser } from "@/types";

interface Props {
  selectedDean: IUser | null;
  closeDialog: () => void;
  handleSelectDean: (dean: IUser) => void;
}

const SearchDeanDialogContent = ({ selectedDean, closeDialog, handleSelectDean }: Props) => {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, isError, isSuccess } = useGetUsers({
    keyword,
    limit: 5,
    filterBy: "role",
    role: "dean",
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Search a Dean</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-2 space-y-4">
        <CustomInput
          icon={Search}
          iconPosition="left"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a Dean"
        />
        <div className="space-y-3">
          {isSuccess && data.pages[0].users.length > 0 ? (
            <>
              {data.pages.map((page) =>
                page.users.map((user) => (
                  <div
                    key={user._id}
                    className="flex gap-x-2 items-center w-full justify-start p-2 rounded hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      handleSelectDean(user);
                      closeDialog();
                    }}
                  >
                    <Avatar className="size-8 text-xs">
                      <AvatarImage src={user.profileImage as string} />
                      <AvatarFallback>{user.firstName[0] + user.lastName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-xs text-start">
                        {user.fullname}
                        {user.department ? ` (${user.department.name})` : ""}
                      </span>
                      <span className="text-[10px] text-start">{user.email}</span>
                    </div>
                    <Checkbox checked={selectedDean?._id === user._id} className="ml-auto" />
                  </div>
                )),
              )}
            </>
          ) : (
            <div className="flex w-full p-2 rounded">No users found.</div>
          )}
        </div>
      </div>
    </DialogContent>
  );
};

export default SearchDeanDialogContent;
