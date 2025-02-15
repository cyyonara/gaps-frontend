import {
  Table,
  TableBody,
  TableFooter,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomInput from "../common/CustomInput";
import { Search, Download, FileUp, Eye, Trash2, Edit } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import CustomButton from "../common/CustomButton";
import { Button } from "../ui/button";
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

const columns = [
  "Name",
  "Description",
  "Department",
  "Created At",
  "Created By",
  "Updated At",
  "Updated By",
  "Actions",
];

const courses = [
  {
    name: "Course 1",
    description: "This is a sample course",
    department: "Computer Science",
    createdAt: "2022-01-01",
    createdBy: "John Doe",
    updatedAt: "2022-01-15",
    updatedBy: "Jane Doe",
  },
  {
    name: "Course 2",
    description: "This is another sample course",
    department: "Mathematics",
    createdAt: "2022-02-01",
    createdBy: "Bob Smith",
    updatedAt: "2022-02-20",
    updatedBy: "Alice Johnson",
  },
  {
    name: "Course 3",
    description: "This is yet another sample course",
    department: "Engineering",
    createdAt: "2022-03-01",
    createdBy: "Mike Brown",
    updatedAt: "2022-03-25",
    updatedBy: "Emily Davis",
  },
  {
    name: "Course 4",
    description: "Introduction to programming",
    department: "Computer Science",
    createdAt: "2022-04-01",
    createdBy: "David Lee",
    updatedAt: "2022-04-15",
    updatedBy: "Sophia Kim",
  },
  {
    name: "Course 5",
    description: "Data structures and algorithms",
    department: "Computer Science",
    createdAt: "2022-05-01",
    createdBy: "Kevin White",
    updatedAt: "2022-05-20",
    updatedBy: "Olivia Martin",
  },
  {
    name: "Course 6",
    description: "Calculus I",
    department: "Mathematics",
    createdAt: "2022-06-01",
    createdBy: "Jessica Hall",
    updatedAt: "2022-06-25",
    updatedBy: "Michael Patel",
  },
  {
    name: "Course 7",
    description: "Introduction to physics",
    department: "Physics",
    createdAt: "2022-07-01",
    createdBy: "Sarah Taylor",
    updatedAt: "2022-07-15",
    updatedBy: "William Thompson",
  },
  {
    name: "Course 8",
    description: "Computer networks",
    department: "Computer Science",
    createdAt: "2022-08-01",
    createdBy: "James Davis",
    updatedAt: "2022-08-20",
    updatedBy: "Rebecca Brown",
  },
  {
    name: "Course 9",
    description: "Database systems",
    department: "Computer Science",
    createdAt: "2022-09-01",
    createdBy: "Robert Johnson",
    updatedAt: "2022-09-25",
    updatedBy: "Amanda Garcia",
  },
  {
    name: "Course 10",
    description: "Artificial intelligence",
    department: "Computer Science",
    createdAt: "2022-10-01",
    createdBy: "Richard Lee",
    updatedAt: "2022-10-15",
    updatedBy: "Elizabeth Kim",
  },
];

const CoursesTable = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center justify-between">
        <CustomInput icon={Search} placeholder="Search Course" />
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-4">
            <span className="text-muted-foreground">Sort By:</span>
            <Select defaultValue="name">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="date">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-x-2">
            <CustomButton icon={Download}>Download</CustomButton>
            <CustomButton variant="outline" icon={FileUp}>
              Export
            </CustomButton>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.name} className="h-20">
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>{course.department}</TableCell>
              <TableCell>{moment(course.createdAt).format("LL")}</TableCell>
              <TableCell>{course.createdBy}</TableCell>
              <TableCell>{moment(course.updatedAt).format("LL")}</TableCell>
              <TableCell>{course.updatedBy}</TableCell>
              <TableCell>
                <div className="flex items-center gap-x-3">
                  <Button className="p-2 text-blue-700 bg-blue-700/10">
                    <Edit />
                  </Button>
                  <Button className="p-2 text-green-700 bg-green-700/10">
                    <Eye />
                  </Button>
                  <Button className="p-2 text-red-700 bg-red-700/10">
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end mb-8">
        <div className="flex items-center gap-x-2 mr-8">
          <span className="text-muted-foreground whitespace-nowrap">Rows per page:</span>
          <Input type="number" defaultValue={10} className="w-24" max="100" />
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
              <PaginationLink href="/courses" isActive>
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

export default CoursesTable;
