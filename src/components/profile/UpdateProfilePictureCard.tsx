import { Button } from "@/components/ui/button";
import CustomInput from "../common/CustomInput";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl, Form } from "../ui/form";
import { addUserSchema } from "@/helpers/validations";
import { IAddUserFormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Image } from "lucide-react";

const UpdateProfilePictureCard = () => {
  const form = useForm<IAddUserFormValues>({
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
    resolver: zodResolver(addUserSchema),
  });

  const handleUpdate = () => {};

  return (
    <Card className="my-5">
      <CardHeader>
        <CardTitle>Update Profile Picture</CardTitle>
        <CardDescription>Update your profile picture</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between py-0 border-none w-full ">
          <div className="flex items-center gap-x-2 w-full">
            <div className="flex flex-col w-full gap-y-4 flex-1 h-min">
              <Form {...form}>
                <form className="mt-0 space-y-4 w-full" onSubmit={form.handleSubmit(handleUpdate)}>
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

export default UpdateProfilePictureCard;
