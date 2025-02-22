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
import { FormField, FormControl, FormItem, FormLabel, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { addDepartmentSchema } from "@/helpers/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "../ui/select";

const AddDepartmentDialog = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof addDepartmentSchema>>({
    resolver: zodResolver(addDepartmentSchema),
    defaultValues: {
      name: "",
      description: "",
      dean: "",
    },
  });

  const onSubmit = (data: z.infer<typeof addDepartmentSchema>) => {
    toast.success("Department added successfully", { duration: 3000, position: "top-center" });
    console.log(data);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton icon={Plus}>Add Deparment</CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Department</DialogTitle>
          <DialogDescription>Add a new department to the system</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form id="add-department-form" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-3 space-y-2 ">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Department Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Department Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="dean"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dean</FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Dean" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="John Doe">John Doe</SelectItem>
                            <SelectItem value="Jane Doe">Jane Doe</SelectItem>
                            <SelectItem value="John Smith">John Smith</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <DialogClose>
            <CustomButton variant="secondary">Cancel</CustomButton>
          </DialogClose>
          <CustomButton type="submit" form="add-department-form">
            Add Department
          </CustomButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDepartmentDialog;
