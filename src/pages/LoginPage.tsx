import { FaUser } from "react-icons/fa";
import bg from "../assets/slanted-gradient.png";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ILoginFields } from "@/types";
import { loginSchema } from "@/helpers/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ILoginFields>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<ILoginFields> = (formData) => {
    console.log(JSON.stringify(formData));
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <div
      className="w-full h-[100vh] bg-background flex flex-col justify-center items-center bg-cover bg-center bg-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Card className="w-[20%] border-none relative flex justify-center items-center flex-col bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-5 rounded-md shadow-xl">
        <div className="absolute top-[-7%] flex justify-center items-center p-3 bg-primary rounded-full">
          <FaUser size={28} className="text-white" />
        </div>

       
        <CardHeader className="flex flex-col items-center leading-tight">
          <CardTitle className="font-semibold text-[20px]"> Welcome To GAPS!</CardTitle>
          <CardDescription className="text-sm text-black">Login to your account.</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <form id="loginForm" onSubmit={handleSubmit(handleLogin)}>
            <div className="flex] w-full flex-col space-y-4 items-start flex-1">
              <div className="w-full">
                <div className="relative flex-1 flex items-center pl-7 border border-black rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                  <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                    <FaEnvelope />
                  </div>
                  <Input
                    type="email"
                    {...register("email")}
                    placeholder="Enter Email Address"
                    className=" placeholder:text-black ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-none shadow-none inset-0 border-none"
                  />
                </div>
                {errors.email && <p className="text-primary text-xs">{errors.email.message}</p>}
              </div>
              <div>
                <div className="relative flex items-start flex-col pl-7 border border-black rounded-md flex-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-transparent">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock />
                  </div>
                  <Input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className=" placeholder:text-black border-none ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-none shadow-none inset-0"
                  />

                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {showPassword ? (
                      <button type="button">
                        <FaEye
                          className="text-black cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      </button>
                    ) : (
                      <button type="button">
                        <FaEyeSlash
                          className="text-black cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      </button>
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-primary text-xs">{errors.password.message}</p>
                )}
              </div>
            </div>
          </form>
          <Button type="submit" form="loginForm" className="w-full mt-4">
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
