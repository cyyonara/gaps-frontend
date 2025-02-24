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
import useGetDepartments from "@/hooks/api/useGetDepartments";
import { Checkbox } from "@/components/ui/checkbox";
import { IDepartmentWithAudit } from "@/types";

interface Props {
  selectedDepartment: IDepartmentWithAudit | null;
  handleSelectDepartment: (department: IDepartmentWithAudit) => void;
  selectDisabled?: boolean;
}

const SearchDepartmentDialog = ({
  selectedDepartment,
  handleSelectDepartment,
  selectDisabled = false,
}: Props) => {
  const [isSearchDepartmentDialogOpen, setIsSearchDepartmentDialogOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isSuccess } = useGetDepartments({
    search,
    page: 1,
    limit: 5,
    sortBy: "",
  });

  return (
    <Dialog open={isSearchDepartmentDialogOpen} onOpenChange={setIsSearchDepartmentDialogOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          className={cn("w-full justify-between", !selectedDepartment && "text-muted-foreground")}
          disabled={selectDisabled}
        >
          {selectedDepartment ? selectedDepartment.name : "Select Department..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search Department</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 space-y-4">
          <CustomInput
            icon={Search}
            iconPosition="left"
            placeholder="Search a Department"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="space-y-3">
            {isSuccess && (
              <>
                {data.departments.length > 0 ? (
                  data.departments.map((department) => (
                    <div
                      key={department._id}
                      className="flex gap-x-2 items-center w-full justify-start p-2 rounded hover:bg-accent hover:text-accent-foreground"
                      onClick={() => {
                        handleSelectDepartment(department);
                        setIsSearchDepartmentDialogOpen(false);
                      }}
                    >
                      <span className="text-sm">{department.name}</span>
                      <Checkbox
                        className="ml-auto"
                        checked={
                          selectedDepartment !== null && selectedDepartment._id === department._id
                        }
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex w-full p-2 rounded">No departments found.</div>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDepartmentDialog;
