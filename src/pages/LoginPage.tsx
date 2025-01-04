import { FaUser } from "react-icons/fa";
import bg from "../assets/slanted-gradient.png";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="w-full h-[100vh] bg-background flex flex-col justify-center items-center bg-cover bg-center bg-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Card className=" border-none relative flex justify-center items-center flex-col bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-5 rounded-md shadow-xl">
        <div className="absolute top-[-7%] flex justify-center items-center p-3 bg-primary rounded-full">
          <FaUser size={28} className="text-white" />
        </div>

        <CardHeader className="flex flex-col items-center leading-tight">
          <CardTitle className="font-semibold text-[20px]"> Welcome To GAPS!</CardTitle>
          <CardDescription className="text-sm text-black">Login to your account.</CardDescription>
        </CardHeader>

        <CardContent>
          <form action="">
            <div className="relative w-full mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope />
              </div>
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="pl-10 pr-3 py-2 border border-black rounded-md w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-transparent placeholder:text-black"
              />
            </div>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="pl-10 pr-3 py-2 border border-black rounded-md w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-transparent placeholder:text-black"
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
          </form>
          <Button className="w-full mt-4">Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
