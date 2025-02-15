import CustomButton from "@/components/common/CustomButton";
import CoursesTable from "@/components/courses/CoursesTable";
import { Plus } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Courses</h1>
            <div className="text-primary py-[6px] px-3 rounded-full text-xs bg-primary/10">
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
