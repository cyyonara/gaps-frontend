import { updatePasswordSchema } from "@/helpers/validations";
import { IUpdatePasswordValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CustomInput from "../common/CustomInput";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { useState } from "react";
import { D } from "node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtools-Cn7cKi7o";

const UpdatePasswordCard = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const form = useForm<IUpdatePasswordValues>({
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(updatePasswordSchema),
  });

  const handleUpdate = () => {
    console.log(form);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Update Password</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Update Password</DialogTitle>
          <DialogDescription>Update your password</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between w-full py-0 border-none ">
          <div className="flex items-center w-full gap-x-2">
            <div className="flex flex-col flex-1 w-full gap-y-4 h-min">
              <Form {...form}>
                <form className="w-full mt-0 space-y-4" onSubmit={form.handleSubmit(handleUpdate)}>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Password</FormLabel>
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
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <CustomInput
                            {...field}
                            type={showNewPassword ? "text" : "password"}
                            iconPosition="right"
                            icon={showNewPassword ? Eye : EyeOff}
                            onIconClick={() => setShowNewPassword(!showNewPassword)}
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
                      <FormItem>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                          <CustomInput
                            {...field}
                            type={showConfirmPassword ? "text" : "password"}
                            iconPosition="right"
                            icon={showConfirmPassword ? Eye : EyeOff}
                            onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            placeholder="Confirm Password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Update</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePasswordCard;
