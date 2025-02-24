import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ILoginFields } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/helpers/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useLogin from "@/hooks/api/useLogin";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/states/useAuth";
import { toast } from "sonner";

function LoginForm() {
  const form = useForm<ILoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login, isPending } = useLogin();
  const setCredentials = useAuth((state) => state.setCredentials);
  const navigate = useNavigate();

  const handleLogin = (values: ILoginFields) => {
    login(values, {
      onSuccess: (data) => {
        setCredentials(data);
        navigate("/dashboard");
        toast.success("Login successful");
      },

      onError: (error) => {
        console.log(error);
        toast.error(error.response?.data.message || "Internal server error");
      },
    });
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(handleLogin)}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="m@example.com" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default LoginForm;
