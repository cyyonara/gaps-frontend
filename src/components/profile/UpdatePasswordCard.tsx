import { updatePasswordSchema } from "@/helpers/validations";
import { IUpdatePasswordValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CustomInput from "../common/CustomInput";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { useState } from "react";

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

  const handleUpdate = () => {};

  return (
    <Card className="my-5">
      <CardHeader>
        <CardTitle>Update Password</CardTitle>
        <CardDescription>
          Ensure your account is using a long, random password to stay secure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between py-0 border-none w-full ">
          <div className="flex items-center gap-x-2 w-full">
            <div className="flex flex-col w-full gap-y-4 flex-1 h-min">
              <Form {...form}>
                <form className="mt-0 space-y-4 w-full" onSubmit={form.handleSubmit(handleUpdate)}>
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
      </CardContent>
    </Card>
  );
};

export default UpdatePasswordCard;
