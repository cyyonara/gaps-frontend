import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { addUserSchema } from "@/helpers/validations";
import { IAddUserFormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProfileInformationCard = () => {
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

  useEffect(() => {
    form.setFocus("email");
  }, []);
  return (
    <Card className="my-5">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Update your account's profile information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between py-0 border-none w-full ">
          <div className="flex items-center gap-x-2 w-full">
            <div className="flex flex-col w-full gap-y-4 flex-1 h-min">
              <Form {...form}>
                <form className="mt-0 space-y-4 w-full" onSubmit={form.handleSubmit(handleUpdate)}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Your Email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Your First Name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="middleName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Middle Initial Only" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Your Last Name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="suffix"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Suffix</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Optional" />
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

export default ProfileInformationCard;
