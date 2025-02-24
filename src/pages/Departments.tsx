import AddDepartmentDialog from "@/components/departments/AddDepartmentDialog";
import DepartmentsTable from "@/components/departments/DepartmentsTable";
import useBreadcrumbContent from "@/hooks/states/useBreadcrumbContent";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Departments = () => {
  const [totalDepartments, setTotalDepartments] = useState<number>(0);
  const setBreadcrumbContent = useBreadcrumbContent((state) => state.setBreadcrumbContent);

  useEffect(() => {
    document.title = "Departments";
    setBreadcrumbContent([
      <Link to="/departments" className="transition-colors hover:text-foreground">
        Departments
      </Link>,
    ]);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Departments</h1>
            <span className="text-primary py-[6px] px-3 rounded-full text-xs bg-primary/10">
              {totalDepartments} total
            </span>
          </div>
          <p className="text-muted-foreground">Here you will see the list of departments.</p>
        </div>
        <AddDepartmentDialog />
      </div>
      <DepartmentsTable setTotalDepartments={(total: number) => setTotalDepartments(total)} />
    </div>
  );
};

export default Departments;
