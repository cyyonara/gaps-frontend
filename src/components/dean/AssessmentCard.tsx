import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { VscKebabVertical } from "react-icons/vsc";
import AssessmentViewMoreDialog from "./AssessmentViewMoreDialog";
import EditAssessmentDialog from "./EditAssessmentDialog";
import AssignMentorDialog from "./AssignMentorDialog";

interface Props {
  title: string;
  description: string;
  mentorAssigned: number;
}

const AssessmentCard = ({ title, description, mentorAssigned }: Props) => {
  return (
    <Card className="bg-white shadow-md border-none transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-[12px]">{description}</CardDescription>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <VscKebabVertical size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" className="text-xs flex flex-col gap-1">
                <AssignMentorDialog />
                <DropdownMenuSeparator className="p-0 m-0" />
                <AssessmentViewMoreDialog title={title} description={description} />
                <DropdownMenuSeparator className="p-0 m-0" />
                <EditAssessmentDialog /> <DropdownMenuSeparator className="p-0 m-0" />
                <DropdownMenuItem className="w-full hover:bg-destructive/50 rounded-md">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <span className="text-[12px]">
          Number of Mentor Assigned: <strong>{mentorAssigned}</strong>
        </span>
      </CardContent>
    </Card>
  );
};

export default AssessmentCard;
