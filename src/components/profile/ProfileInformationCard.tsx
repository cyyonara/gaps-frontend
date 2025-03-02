import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { addUserSchema } from "@/helpers/validations";
import { IUpdateFormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UpdatePasswordCard from "./UpdatePasswordCard";
import useAuth from "@/hooks/states/useAuth";

import useUpdateProfile from "@/hooks/api/useUpdateProfile";
import { toast } from "sonner";

const ProfileInformationCard = () => {
  const user = useAuth((state) => state.auth);
  const [editInfo, setEditInfo] = useState(false);

  const form = useForm<IUpdateFormValues>({
    defaultValues: {
      email: user!.email,
      firstName: user!.firstName,
      middleName: user!.middleName ?? "",
      lastName: user!.lastName,
      suffix: user!.suffix ?? "",
    },
    resolver: zodResolver(addUserSchema),
  });

  const { mutate: updateProfile } = useUpdateProfile();

  const handleUpdateProfile = (values: IUpdateFormValues) => {
    //console.log(values);
    console.log("Hello");
  };

  const handleUpdateProfile2 = () => {
    //console.log(values);
    console.log("Hello");
  };

  useEffect(() => {
    form.setFocus("email");
  }, []);
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          {editInfo ? "Update your profile information" : "View your profile information"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between w-full py-0 border-none ">
          <button onClick={() => handleUpdateProfile2()}>awdawawwd</button>
          <div className="flex items-center w-full gap-x-2">
            <div className="flex flex-col flex-1 w-full gap-y-4 h-min">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleUpdateProfile)}
                  className="w-full mt-0 space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Your Email" disabled={!editInfo} />
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
                          <Input {...field} placeholder="Your First Name" disabled={!editInfo} />
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
                          <Input
                            {...field}
                            placeholder="Middle Initial Only"
                            disabled={!editInfo}
                          />
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
                          <Input {...field} placeholder="Your Last Name" disabled={!editInfo} />
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
                          <Input {...field} placeholder="Optional" disabled={!editInfo} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-x-2">
                    <div>
                      <Button type="submit" onClick={() => setEditInfo(!editInfo)}>
                        {editInfo ? "Update" : "Edit"}
                      </Button>
                    </div>
                    <UpdatePasswordCard />
                  </div>
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
