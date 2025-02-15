import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editAssessmentSchema } from "@/helpers/validations";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
}

const CoursesEditDialog = ({ description, title }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editAssessmentSchema),
    defaultValues: {
      title: title,
      description: description,
    },
  });

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
      </DialogTrigger>

      <DialogContent className="min-w-[40%]">
        <DialogHeader>
          <DialogTitle>Edit Course</DialogTitle>
          <DialogDescription>Edit course details</DialogDescription>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register("title")} placeholder={title} />
                {errors.title && (
                  <span className="text-xs text-primary">{errors.title.message}</span>
                )}
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Input id="decription" placeholder={description} {...register("description")} />
                {errors.description && (
                  <span className="text-xs text-primary">{errors.description.message}</span>
                )}
              </div>
            </div>
            <DialogFooter className="pt-5">
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoursesEditDialog;
