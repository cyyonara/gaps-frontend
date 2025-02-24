import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Courses from "@/pages/Courses";
import Assessments from "@/pages/Assessments";
import RootLayout from "@/components/layouts/RootLayout";
import Dashboard from "@/pages/admin/Dashboard";
import { useEffect } from "react";
import useTheme from "@/hooks/states/useTheme";
import Departments from "@/pages/Departments";
import Login2 from "@/pages/Login2";
import AddAssessment from "@/pages/AddAssessment";

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
      <Route path="login" element={<Login2 />} />
      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/departments" element={<Departments />} />

        <Route path="/assessments/*">
          <Route index element={<Assessments />} />
          <Route path="add" element={<AddAssessment />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
