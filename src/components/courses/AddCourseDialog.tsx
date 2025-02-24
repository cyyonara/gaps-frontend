import { Plus } from "lucide-react";
import CustomButton from "@/components/common/CustomButton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCourseSchema } from "@/helpers/validations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IAddCourseFormValues, IDepartmentWithAudit } from "@/types";
import { useState } from "react";
import SearchDepartmentDialog from "../departments/SearchDepartmentDialog";
import useAddCourse from "@/hooks/api/useAddCourse";
import { toast } from "sonner";

const AddCourseDialog = () => {
  const form = useForm<IAddCourseFormValues>({
    defaultValues: {
      name: "",
      department: null,
    },
    resolver: zodResolver(addCourseSchema),
  });
  const { mutate: addCourse, isPending } = useAddCourse();
  const [isAddCourseDialogOpen, setIsAddCourseDialogOpen] = useState(false);

  const handleAddCourse = (values: IAddCourseFormValues) => {
    const { _id } = values.department as IDepartmentWithAudit;
    addCourse(
      { name: values.name, department: _id },
      {
        onSuccess: (data) => {
          toast.success(`Course ${data.name} created successfully`);
          form.reset();
          setIsAddCourseDialogOpen(false);
        },
        onError: (error) => {
          toast.error(error.response?.data.message || "Internal server error");
        },
      },
    );
  };

  return (
    <Dialog open={isAddCourseDialogOpen} onOpenChange={setIsAddCourseDialogOpen}>
      <DialogTrigger asChild>
        <CustomButton icon={Plus}>Add Course</CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
          <DialogDescription>Add new course to the system</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="mt-2 space-y-4" onSubmit={form.handleSubmit(handleAddCourse)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course name</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} placeholder="Enter course name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <SearchDepartmentDialog
                      selectDisabled={isPending}
                      selectedDepartment={
                        field.value ? (field.value as IDepartmentWithAudit) : null
                      }
                      handleSelectDepartment={(department: IDepartmentWithAudit) =>
                        form.setValue("department", department)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isPending}>
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseDialog;
