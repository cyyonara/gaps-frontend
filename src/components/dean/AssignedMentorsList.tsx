import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

const mockData = [
  {
    mentor: "Alice Johnson",
    dateAssigned: "2023-01-01",
    deadline: "2023-02-01",
    status: "Completed",
  },
  {
    mentor: "Bob Smith",
    dateAssigned: "2023-01-15",
    deadline: "2023-02-15",
    status: "In Progress",
  },
  {
    mentor: "Charlie Davis",
    dateAssigned: "2023-02-01",
    deadline: "2023-03-01",
    status: "Pending",
  },
];

const tableHeader = ["Mentor", "Date Assigned", "Deadline", "Status", "Actions"];

const AssignedMentorsList = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Assigned Mentors</Button>
      </DialogTrigger>

      <DialogContent className="min-w-[800px]">
        <DialogHeader>
          <DialogTitle>Assigned Mentors</DialogTitle>
          <DialogDescription>View list of assigned mentors</DialogDescription>
        </DialogHeader>

        <div className="flex justify-end mt-5"></div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-200">
              {tableHeader.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((data) => (
              <TableRow key={data.mentor}>
                <TableCell>{data.mentor}</TableCell>
                <TableCell>{format(new Date(data.dateAssigned), "PPP")}</TableCell>
                <TableCell>{format(new Date(data.deadline), "PPP")}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>
                  <Button variant="ghost">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default AssignedMentorsList;
