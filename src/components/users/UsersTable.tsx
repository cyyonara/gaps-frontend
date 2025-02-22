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
  "Email Address",
  "User Type",
  "Department",
  "Created At",
  "Created By",
  "Updated At",
  "Updated By",
];

const users = [
  {
    name: "John Doe",
    emailAddress: "john.doe@example.com",
    userType: "Admin",
    department: "Business Administration",
    createdAt: "2022-01-01",
    createdBy: "Admin User",
    updatedAt: "2022-01-05 ",
    updatedBy: "Admin User",
  },
  {
    name: "Jane Smith",
    emailAddress: "jane.smith@example.com",
    userType: "User",
    department: "Marketing",
    createdAt: "2022-02-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-02-10 ",
    updatedBy: "Admin User",
  },
  {
    name: "Bob Johnson",
    emailAddress: "bob.johnson@example.com",
    userType: "Admin",
    department: "Information Technology",
    createdAt: "2022-03-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-03-15 ",
    updatedBy: "Admin User",
  },
  {
    name: "Alice Brown",
    emailAddress: "alice.brown@example.com",
    userType: "User",
    department: "Human Resources",
    createdAt: "2022-04-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-04-12 ",
    updatedBy: "Admin User",
  },
  {
    name: "Mike Davis",
    emailAddress: "mike.davis@example.com",
    userType: "Admin",
    department: "Finance",
    createdAt: "2022-05-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-05-15",
    updatedBy: "Admin User",
  },
  {
    name: "Emily Chen",
    emailAddress: "emily.chen@example.com",
    userType: "User",
    department: "Operations Management",
    createdAt: "2022-06-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-06-20 ",
    updatedBy: "Admin User",
  },
  {
    name: "David Lee",
    emailAddress: "david.lee@example.com",
    userType: "Admin",
    department: "Research and Development",
    createdAt: "2022-07-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-07-25 ",
    updatedBy: "Admin User",
  },
  {
    name: "Sophia Patel",
    emailAddress: "sophia.patel@example.com",
    userType: "User",
    department: "Customer Service",
    createdAt: "2022-08-01 ",
    createdBy: "Admin User",
    updatedAt: "2022-08-15",
    updatedBy: "Admin User",
  },
];

const UsersTable = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center justify-between">
        <CustomInput icon={Search} placeholder="Search users..." />
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
          {users.map((user) => (
            <TableRow key={user.name} className="h-16 text-center">
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.emailAddress}</TableCell>
              <TableCell>{user.userType}</TableCell>
              <TableCell>{user.emailAddress}</TableCell>
              <TableCell>{user.createdBy}</TableCell>
              <TableCell>{moment(user.createdAt).format("LL")}</TableCell>
              <TableCell>{user.updatedBy}</TableCell>
              <TableCell>{moment(user.updatedAt).format("LL")}</TableCell>
              <TableCell>
                <Button variant="ghost" className="size-9">
                  <Ellipsis />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mb-8 flex items-center justify-end">
        <div className="mr-8 flex items-center gap-x-2">
          <span className="whitespace-nowrap text-muted-foreground">Rows per page:</span>
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

export default UsersTable;
