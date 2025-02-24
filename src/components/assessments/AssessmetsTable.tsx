import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomInput from "../common/CustomInput";
import { Search, Download, FileUp, Ellipsis } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import CustomButton from "../common/CustomButton";
import moment from "moment";
import { Input } from "../ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";

const columns = [
  "Name",
  "Description",
  "Department",
  "Course",
  "Assigned Mentors",
  "Created At",
  "Created By",
  "Updated At",
  "Updated By",
];

const assessments = [
  {
    name: "Mathematics Exam",
    description: "Assessment Exam For Mathematics Students",
    department: "Mathematics Department",
    course: "Algebra Course",
    assignedMentor: 1,
    createdAt: "2022-01-01",
    createdBy: "Admin User",
    updatedAt: "2022-01-05",
    updatedBy: "Admin User",
  },
  {
    name: "Science Exam",
    description: "Assessment Exam For Science Students",
    department: "Science Department",
    course: "Biology Course",
    assignedMentor: 2,
    createdAt: "2022-02-01",
    createdBy: "Admin User",
    updatedAt: "2022-02-10",
    updatedBy: "Admin User",
  },
  {
    name: "English Exam",
    description: "Assessment Exam For English Students",
    department: "English Department",
    course: "Literature Course",
    assignedMentor: 3,
    createdAt: "2022-03-01",
    createdBy: "Admin User",
    updatedAt: "2022-03-15 ",
    updatedBy: "Admin User",
  },
  {
    name: "History Exam",
    description: "Assessment Exam For History Students",
    department: "History Department",
    course: "World History Course",
    assignedMentor: 4,
    createdAt: "2022-04-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-04-12 ",
    updatedBy: "Admin User",
  },
  {
    name: "Computer Science Exam",
    description: "Assessment Exam For Computer Science Students",
    department: "Computer Science Department",
    course: "Programming Course",
    assignedMentor: 5,
    createdAt: "2022-05-01",
    createdBy: "Admin User",
    updatedAt: "2022-05-15",
    updatedBy: "Admin User",
  },
  {
    name: "Economics Exam",
    description: "Assessment Exam For Economics Students",
    department: "Economics Department",
    course: "Microeconomics Course",
    assignedMentor: 6,
    createdAt: "2022-06-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-06-20",
    updatedBy: "Admin User",
  },
  {
    name: "Geography Exam",
    description: "Assessment Exam For Geography Students",
    department: "Geography Department",
    course: "Physical Geography Course",
    assignedMentor: 7,
    createdAt: "2022-07-01",
    createdBy: "Admin User",
    updatedAt: "2022-07-25",
    updatedBy: "Admin User",
  },
  {
    name: "Physics Exam",
    description: "Assessment Exam For Physics Students",
    department: "Physics Department",
    course: "Mechanics Course",
    assignedMentor: 8,
    createdAt: "2022-08-01",
    createdBy: "Admin User",
    updatedAt: "2022-08-15",
    updatedBy: "Admin User",
  },
];

const AssessmetsTable = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center justify-between">
        <CustomInput icon={Search} placeholder="Search assessment..." />
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-4">
            <span className="text-muted-foreground">Sort By:</span>
            <Select defaultValue="name">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort Assessment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="date">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-x-2">
            <CustomButton variant="outline" icon={Download}>
              Download
            </CustomButton>
            <CustomButton icon={FileUp}>Export</CustomButton>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="h-16">
            {columns.map((column) => (
              <TableHead key={column} className="text-center">
                {column}
              </TableHead>
            ))}
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assessments.map((assessment) => (
            <TableRow key={assessment.name} className="h-16 text-center">
              <TableCell>{assessment.name}</TableCell>
              <TableCell>{assessment.description}</TableCell>
              <TableCell>{assessment.department}</TableCell>
              <TableCell>{assessment.course}</TableCell>
              <TableCell>{assessment.assignedMentor}</TableCell>
              <TableCell>{moment(assessment.createdAt).format("LL")}</TableCell>
              <TableCell>{assessment.createdBy}</TableCell>
              <TableCell>{moment(assessment.updatedAt).format("LL")}.</TableCell>
              <TableCell>{assessment.updatedBy}</TableCell>
              <TableCell>
                <Button variant="ghost" className="size-9">
                  <Ellipsis />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mb-10 flex items-center justify-end">
        <div className="mr-8 flex items-center gap-x-2">
          <span className="text-muted-foreground">Rows per page:</span>
          <Input type="number" defaultValue={8} className="w-24" max="100" />
        </div>
        <Pagination className="mx-0 w-min">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/assessment" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AssessmetsTable;
