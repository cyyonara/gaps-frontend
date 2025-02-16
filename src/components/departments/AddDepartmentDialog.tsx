import { Plus } from "lucide-react";
import CustomButton from "../common/CustomButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

const AddDepartmentDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton icon={Plus}>Add Deparment</CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Department</DialogTitle>
          <DialogDescription>Add a new department to the system</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddDepartmentDialog;
