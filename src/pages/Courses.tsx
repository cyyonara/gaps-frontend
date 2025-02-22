import CustomButton from "@/components/common/CustomButton";
import CoursesTable from "@/components/courses/CoursesTable";
import { Plus } from "lucide-react";
// import {
//   Breadcrumb,
//   BreadcrumbEllipsis,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Courses</h1>
            <div className="rounded-full bg-primary/10 px-3 py-[6px] text-xs text-primary">
              120 total
            </div>
          </div>
          <p className="text-muted-foreground">Here you will see the list of courses.</p>
        </div>
        <CustomButton icon={Plus}>Add Course</CustomButton>
      </div>
      <CoursesTable />
    </div>
  );
};

export default Courses;
