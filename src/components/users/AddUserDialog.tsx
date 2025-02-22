import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import CustomButton from "../common/CustomButton";
import { Plus, Eye, EyeClosed } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { addUserSchema } from "@/helpers/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import z from "zod";
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectValue,
  SelectItem,
} from "../ui/select";

const departments = [
  { value: "businessAdministration", title: "Business Administration" },
  { value: "computerScience", title: "Computer Science" },
  { value: "engineering", title: "Engineering" },
  { value: "biology", title: "Biology" },
  { value: "psychology", title: "Psychology" },
  { value: "economics", title: "Economics" },
  { value: "english", title: "English" },
  { value: "mathematics", title: "Mathematics" },
  { value: "sociology", title: "Sociology" },
];

const AddUserDialog = () => {
  const [openPassword, setOpenPassword] = useState(false);
  const [openConfirmPassword, setOpenConfirmPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof addUserSchema>>({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      name: "",
      email: "",
      department: "",
      userType: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof addUserSchema>) => {
    toast.success("User added successfully", { duration: 3000, position: "top-center" });
    form.reset();
    setOpen(false);
    console.log(data);
  };

  useEffect(() => {
    if (!open) form.reset();
  }, [open, form.reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton icon={Plus}>Add User</CustomButton>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-[25px] font-bold text-primary">Add User</DialogTitle>
          <DialogDescription>Fill out the form to add a user to the system.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="add-user-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-y-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      className="placeholder:text-sm"
                      placeholder="Enter Full Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      className="placeholder:text-sm"
                      placeholder="Enter Email Address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-x-2">
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Department</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          {departments.map((department) => (
                            <SelectItem key={department.value} value={department.value}>
                              {department.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userType"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>User Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select User Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="dean">Dean</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Password</FormLabel>
                  <FormControl>
                    <div className="flex w-full pl-3 rounded-md h-9 ring-1 ring-input focus-within:ring-primary">
                      <input
                        className="w-full text-sm placeholder:text-muted-foreground placeholder:text-sm focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0"
                        placeholder="Enter Password"
                        type={openPassword ? "text" : "password"}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setOpenPassword(!openPassword)}
                      >
                        {openPassword ? <Eye /> : <EyeClosed />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="flex w-full pl-3 text-sm rounded-md h-9 ring-1 ring-input focus-within:ring-primary">
                      <input
                        className="w-full placeholder:text-muted-foreground placeholder:text-sm focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0"
                        placeholder="Re-Enter Password"
                        type={openConfirmPassword ? "text" : "password"}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setOpenConfirmPassword(!openConfirmPassword)}
                      >
                        {openConfirmPassword ? <Eye /> : <EyeClosed />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end mt-5">
              <Button type="submit" form="add-user-form">
                Confirm
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
