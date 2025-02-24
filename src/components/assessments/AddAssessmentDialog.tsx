import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import CustomButton from "../common/CustomButton";
import { Plus } from "lucide-react";

const AddAssessmentDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton icon={Plus}>Add Assessment</CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Assessment</DialogTitle>
          <DialogDescription>Add a new assessment to the system</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddAssessmentDialog;
