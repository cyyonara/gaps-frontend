import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/Courses";
import Assessments from "./pages/dean/Assessments";
import Profile from "./pages/dean/Profile";
import RootLayout from "./components/layouts/RootLayout";
import Dashboard from "./pages/admin/Dashboard";
import { useEffect } from "react";
import useTheme from "./hooks/states/useTheme";
import Departments from "./pages/Departments";

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
        <Route path="/dean/assessments" element={<Assessments />} />
        <Route path="/dean/profile" element={<Profile />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/departments" element={<Departments />} />
      </Route>
    </Routes>
  );
};

export default App;
