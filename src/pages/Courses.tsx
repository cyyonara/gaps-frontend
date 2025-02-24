import AddCourseDialog from "@/components/courses/AddCourseDialog";
import CoursesTable from "@/components/courses/CoursesTable";
import { useState } from "react";

const Courses = () => {
  const [totalCourses, setTotalCourses] = useState<number>(0);

  return (
    <div className="flex flex-col">
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Courses</h1>
            <div className="text-primary py-[6px] px-3 rounded-full text-xs bg-primary/10">
              {totalCourses} total
            </div>
          </div>
          <p className="text-muted-foreground">Here you will see the list of courses.</p>
        </div>
        <AddCourseDialog />
      </div>
      <CoursesTable setTotalCourses={(total: number) => setTotalCourses(total)} />
    </div>
  );
};

export default Courses;
