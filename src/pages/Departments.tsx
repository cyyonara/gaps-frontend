import AddDepartmentDialog from "@/components/departments/AddDepartmentDialog";
import DepartmentsTable from "@/components/departments/DepartmentsTable";

const Departments = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Departments</h1>
            <div className="text-primary py-[6px] px-3 rounded-full text-xs bg-primary/10">
              12 total
            </div>
          </div>
          <p className="text-muted-foreground">Here you will see the list of departments.</p>
        </div>
        <AddDepartmentDialog />
      </div>
      <DepartmentsTable />
    </div>
  );
};

export default Departments;
