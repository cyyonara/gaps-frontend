import { ChevronsUpDown, Plus } from "lucide-react";
import CustomButton from "@/components/common/CustomButton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDepartmentSchema } from "@/helpers/validations";
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
import { IAddDepartmentFormValues, IUser, IUserWithAudit } from "@/types";
import { cn } from "@/lib/utils";
import SearchDeanDialogContent from "@/components/departments/SearchDeanDialogContent";
import { useState } from "react";
import useAddDepartment from "@/hooks/api/useAddDepartment";
import { toast } from "sonner";

const AddDepartmentDialog = () => {
  const form = useForm<IAddDepartmentFormValues>({
    defaultValues: {
      name: "",
      dean: null,
    },
    resolver: zodResolver(addDepartmentSchema),
  });
  const [isSearchDeanDialogOpen, setIsSearchDeanDialogOpen] = useState(false);
  const [isAddDepartmentDialogOpen, setIsAddDepartmentDialogOpen] = useState(false);
  const { mutate: addDepartment, isPending } = useAddDepartment();

  const handleSelectDean = (dean: IUser) => {
    form.setValue("dean", dean);
  };

  const handleAddDepartment = (values: IAddDepartmentFormValues) => {
    const dean = values.dean as IUserWithAudit;
    addDepartment(
      {
        dean: dean ? dean._id : null,
        name: values.name,
      },
      {
        onSuccess: (data) => {
          form.reset();
          setIsAddDepartmentDialogOpen(false);
          toast.success(`Department ${data.name} created successfully`);
        },

        onError: (error) => {
          toast.error(error.response?.data.message || "Internal server error");
        },
      },
    );
  };

  return (
    <Dialog open={isAddDepartmentDialogOpen} onOpenChange={setIsAddDepartmentDialogOpen}>
      <DialogTrigger asChild>
        <CustomButton icon={Plus}>Add Deparment</CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add department</DialogTitle>
          <DialogDescription>Add a new department to the system</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="mt-2 space-y-4" onSubmit={form.handleSubmit(handleAddDepartment)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter department name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="dean"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-y-1">
                  <FormLabel>Dean</FormLabel>
                  <FormControl>
                    <Dialog open={isSearchDeanDialogOpen} onOpenChange={setIsSearchDeanDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                          disabled={isPending}
                        >
                          {field.value ? field.value.fullname : "Select Dean"}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </DialogTrigger>
                      <SearchDeanDialogContent
                        selectedDean={field.value}
                        closeDialog={() => setIsSearchDeanDialogOpen(false)}
                        handleSelectDean={handleSelectDean}
                      />
                    </Dialog>
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
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

export default AddDepartmentDialog;
