import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "../ui/dialog";
import { DropdownMenuItem } from "../ui/dropdown-menu";

const EditAssessmentDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Assessment</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </DialogDescription>
        </DialogHeader>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aut doloremque cumque?
          Similique sit nobis, fuga quia maxime nihil blanditiis cupiditate aspernatur quisquam
          itaque sed nesciunt facere assumenda. Possimus, incidunt?
        </p>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditAssessmentDialog;
