import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "../ui/dialog";
import { DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import SearchBar from "../shared/SearchBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../ui/dropdown-menu";
import { VscKebabVertical } from "react-icons/vsc";
import CoursesEditDialog from "./CoursesEditDialog";
import { format } from "date-fns";

interface Props {
  department: string;
}

const tableHeader = ["Title", "Description", "Created At", "Updated At", "Actions"];

const mockAssessments = [
  {
    title: "Midterm Exam",
    description: "Comprehensive assessment covering all topics from the first half of the course.",
    createdAt: "2025-01-10",
    updatedAt: "2025-01-15",
  },
  {
    title: "Final Project",
    description: "A capstone project requiring application of all learned concepts.",
    createdAt: "2025-02-01",
    updatedAt: "2025-02-07",
  },
  {
    title: "Weekly Quiz 1",
    description: "Short quiz covering the first two weeks of lessons.",
    createdAt: "2025-01-05",
    updatedAt: "2025-01-06",
  },
  {
    title: "Case Study Analysis",
    description: "Group work on analyzing a real-world IT problem.",
    createdAt: "2025-01-20",
    updatedAt: "2025-01-25",
  },
  {
    title: "Lab Exercise 3",
    description: "Hands-on coding exercise on React components.",
    createdAt: "2025-01-15",
    updatedAt: "2025-01-16",
  },
];

const CoursesViewMore = ({ department }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>View More</DropdownMenuItem>
      </DialogTrigger>

      <DialogContent className="min-w-[60%]">
        <DialogHeader>
          <DialogTitle>Course Details</DialogTitle>
          <DialogDescription>
            View assessments in this course under <strong>{department}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-5 flex flex-col">
          <div className="flex justify-end py-3">
            <SearchBar placeholder="Search Assessment" />
          </div>
          <Table>
            <TableHeader className="bg-gray-200">
              {tableHeader.map((header) => (
                <TableHead className="" key={header}>
                  {header}
                </TableHead>
              ))}
            </TableHeader>
            <TableBody>
              {mockAssessments.map((assessment) => (
                <TableRow key={assessment.title}>
                  <TableCell>{assessment.title}</TableCell>
                  <TableCell>{assessment.description}</TableCell>
                  <TableCell> {format(new Date(assessment.createdAt), "PPP")}</TableCell>
                  <TableCell> {format(new Date(assessment.updatedAt), "PPP")} </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <VscKebabVertical />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <CoursesEditDialog
                            title={assessment.title}
                            description={assessment.description}
                          />
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="bg-destructive/50  ">
                            Archive
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoursesViewMore;
