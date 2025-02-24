import { Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useAssessment from "@/hooks/states/useAssessment";
import { useState } from "react";

interface Props {
  index: number;
}

const DeleteCreatedQuestionDialog = ({ index }: Props) => {
  const deleteQuestion = useAssessment((state) => state.deleteQuestion);
  const [open, setOpen] = useState<boolean>(false);

  const handleDelete = () => {
    deleteQuestion(index);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Trash size={18} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Remove this question?</DialogTitle>
          <DialogDescription>
            This action will remove the question that you create
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleDelete}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCreatedQuestionDialog;
