import { Button } from "@/components/ui/button";
import CustomInput from "../common/CustomInput";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl, Form } from "../ui/form";
import { addUserSchema } from "@/helpers/validations";
import { IAddUserFormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Image } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { D } from "node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtools-Cn7cKi7o";

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
    <Dialog>
      <DialogTrigger asChild>
        <p className="mt-3 text-xs underline cursor-pointer">Upload Profile Picture</p>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Update Profile Picture</DialogTitle>
          <DialogDescription> Update your account's profile picture</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between w-full py-3 border-none ">
          <div className="flex items-center w-full gap-x-2">
            <div className="flex flex-col flex-1 w-full gap-y-4 h-min">
              <Form {...form}>
                <form className="w-full mt-0 space-y-4" onSubmit={form.handleSubmit(handleUpdate)}>
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
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfilePictureCard;
