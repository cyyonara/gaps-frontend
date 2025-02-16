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

const columns = ["Name", "Dean", "Courses", "Created At", "Created By", "Updated At", "Updated By"];

const departments = [
  {
    name: "Computer Science",
    dean: "Dr. Jane Smith",
    coursesCount: 20,
    createdAt: "2020-01-01",
    createdBy: "John Doe",
    updatedAt: "2022-01-15",
    updatedBy: "Jane Doe",
  },
  {
    name: "Mathematics",
    dean: "Dr. John Taylor",
    coursesCount: 15,
    createdAt: "2020-02-01",
    createdBy: "Bob Smith",
    updatedAt: "2022-02-20",
    updatedBy: "Alice Johnson",
  },
  {
    name: "Engineering",
    dean: "Dr. Maria Rodriguez",
    coursesCount: 25,
    createdAt: "2020-03-01",
    createdBy: "Mike Brown",
    updatedAt: "2022-03-25",
    updatedBy: "Emily Davis",
  },
  {
    name: "Physics",
    dean: "Dr. David Lee",
    coursesCount: 10,
    createdAt: "2020-04-01",
    createdBy: "David Lee",
    updatedAt: "2022-04-15",
    updatedBy: "Sophia Kim",
  },
  {
    name: "Biology",
    dean: "Dr. Emily Chen",
    coursesCount: 18,
    createdAt: "2020-05-01",
    createdBy: "Kevin White",
    updatedAt: "2022-05-20",
    updatedBy: "Olivia Martin",
  },
  {
    name: "Chemistry",
    dean: "Dr. James Davis",
    coursesCount: 22,
    createdAt: "2020-06-01",
    createdBy: "James Davis",
    updatedAt: "2022-06-15",
    updatedBy: "Rebecca Brown",
  },
  {
    name: "Economics",
    dean: "Dr. Sarah Taylor",
    coursesCount: 12,
    createdAt: "2020-07-01",
    createdBy: "Sarah Taylor",
    updatedAt: "2022-07-15",
    updatedBy: "William Thompson",
  },
  {
    name: "Business Administration",
    dean: "Dr. Robert Johnson",
    coursesCount: 28,
    createdAt: "2020-08-01",
    createdBy: "Robert Johnson",
    updatedAt: "2022-08-20",
    updatedBy: "Amanda Garcia",
  },
  {
    name: "Environmental Science",
    dean: "Dr. Richard Lee",
    coursesCount: 8,
    createdAt: "2020-09-01",
    createdBy: "Richard Lee",
    updatedAt: "2022-09-25",
    updatedBy: "Elizabeth Kim",
  },
  {
    name: "Psychology",
    dean: "Dr. Elizabeth Hall",
    coursesCount: 20,
    createdAt: "2020-10-01",
    createdBy: "Elizabeth Hall",
    updatedAt: "2022-10-15",
    updatedBy: "Michael Brown",
  },
];
const DepartmentsTable = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center justify-between">
        <CustomInput icon={Search} placeholder="Search department..." />
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
            <CustomButton variant="outline" icon={Download}>
              Download
            </CustomButton>
            <CustomButton variant="outline" icon={FileUp}>
              Export
            </CustomButton>
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
          {departments.map((department) => (
            <TableRow key={department.name} className="h-16 text-center">
              <TableCell>{department.name}</TableCell>
              <TableCell>{department.dean}</TableCell>
              <TableCell>{department.coursesCount}</TableCell>
              <TableCell>{moment(department.createdAt).format("LL")}</TableCell>
              <TableCell>{department.createdBy}</TableCell>
              <TableCell>{moment(department.updatedAt).format("LL")}</TableCell>
              <TableCell>{department.updatedBy}</TableCell>
              <TableCell>
                <Button variant="ghost" className="size-9">
                  <Ellipsis />
                </Button>
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

export default DepartmentsTable;
