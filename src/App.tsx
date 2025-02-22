import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/Courses";
import Assessments from "./pages/Assessments";
import RootLayout from "./components/layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import useTheme from "./hooks/states/useTheme";
import Departments from "./pages/Departments";
import Users from "./pages/Users";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route element={<RootLayout />}>
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default App;
