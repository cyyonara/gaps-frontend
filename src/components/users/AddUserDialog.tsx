import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import CustomButton from "@/components/common/CustomButton";
import { Plus, Eye, Image, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { addUserSchema } from "@/helpers/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { userRolesOptions } from "@/utils/userUtils";
import SearchDepartmentDialog from "../departments/SearchDepartmentDialog";
import { IAddUserFormValues, IDepartmentWithAudit, TUserRole } from "@/types";
import CustomInput from "@/components/common/CustomInput";

const AddUserDialog = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<IAddUserFormValues>({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      department: "",
    },
  });

  const onSubmit = (values: IAddUserFormValues) => {
    console.log(values);
  };

  useEffect(() => {
    form.setFocus("email");
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton icon={Plus}>Add User</CustomButton>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()} className="max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Fill out the form to add a user to the system.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form id="add-user-form" onSubmit={form.handleSubmit(onSubmit)} className="flex gap-x-4">
            <div className="flex flex-col w-full gap-y-4 flex-1 h-min">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:text-sm w-full"
                        placeholder="example@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-x-4 flex-1 ">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input className="placeholder:text-sm" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input className="placeholder:text-sm" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-x-4 flex-1 ">
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Middle Name</FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:text-sm"
                          placeholder="middle initial only"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="suffix"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Suffix</FormLabel>
                      <FormControl>
                        <Input className="placeholder:text-sm" placeholder="optional" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-x-4 flex-1 ">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={(value) => form.setValue("role", value as TUserRole)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Role</SelectLabel>
                              {userRolesOptions.map((role) => (
                                <SelectItem key={role.value} value={role.value}>
                                  {role.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Department (optional)</FormLabel>
                      <FormControl>
                        <SearchDepartmentDialog
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
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-4 flex-1 h-min">
              <FormField
                control={form.control}
                name="profileImage"
                render={() => (
                  <FormItem>
                    <FormLabel>Profile Image (optional)</FormLabel>
                    <FormControl>
                      <CustomInput
                        icon={Image}
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            form.setValue("profileImage", file);
                          }
                        }}
                      />
                    </FormControl>
                    {form.formState.errors.profileImage && (
                      <p className="text-[0.8rem] font-medium text-destructive">
                        Invalid image type
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <CustomInput
                        {...field}
                        type={showPassword ? "text" : "password"}
                        iconPosition="right"
                        icon={showPassword ? Eye : EyeOff}
                        onIconClick={() => setShowPassword(!showPassword)}
                        placeholder="Password (8+): 1 upper, 1 lower, 1 num, 1 special"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="mb-auto">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <CustomInput
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        iconPosition="right"
                        icon={showPassword ? Eye : EyeOff}
                        onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        placeholder="Confirm Password"
                      />
                    </FormControl>
                    {form.formState.errors.confirmPassword && (
                      <p className="text-[0.8rem] font-medium text-destructive">
                        Passwords do not match
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit" form="add-user-form">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
