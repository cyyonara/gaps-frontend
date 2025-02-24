import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Search } from "lucide-react";
import CustomInput from "@/components/common/CustomInput";
import { cn } from "@/lib/utils";
import useGetCourses from "@/hooks/api/useGetCourses";
import { Checkbox } from "@/components/ui/checkbox";
import { ICourseWithAudit } from "@/types";

interface Props {
  selectedCourse: ICourseWithAudit | null;
  handleSelectCourse: (department: ICourseWithAudit) => void;
  selectDisabled?: boolean;
}

const SearchCourseDialog = ({
  selectedCourse,
  handleSelectCourse,
  selectDisabled = false,
}: Props) => {
  const [isSearchCourseDialogOpen, setIsSearchCourseDialogOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isSuccess } = useGetCourses({ search, limit: 5, page: 1, sortBy: "" });

  return (
    <Dialog open={isSearchCourseDialogOpen} onOpenChange={setIsSearchCourseDialogOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          className={cn("w-full justify-between", !selectedCourse && "text-muted-foreground")}
          disabled={selectDisabled}
        >
          {selectedCourse ? selectedCourse.name : "Choose course"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search course</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 space-y-4">
          <CustomInput
            icon={Search}
            iconPosition="left"
            placeholder="Search a Course"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="space-y-3">
            {isSuccess && (
              <>
                {data.courses.length > 0 ? (
                  data.courses.map((course) => (
                    <div
                      key={course._id}
                      className="flex gap-x-2 items-center w-full justify-start p-2 rounded hover:bg-accent hover:text-accent-foreground"
                      onClick={() => {
                        handleSelectCourse(course);
                        setIsSearchCourseDialogOpen(false);
                      }}
                    >
                      <span className="text-sm">{course.name}</span>
                      <Checkbox
                        className="ml-auto"
                        checked={selectedCourse !== null && selectedCourse._id === course._id}
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex w-full p-2 rounded">No courses found.</div>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchCourseDialog;
