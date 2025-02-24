import AssessmentDetailsForm from "@/components/assessments/AssessmentDetailsForm";
import useBreadcrumbContent from "@/hooks/states/useBreadcrumbContent";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddQuestions from "@/components/assessments/AddQuestions";
import useAssessment from "@/hooks/states/useAssessment";

const AddAssessment = () => {
  const setBreadcrumbContent = useBreadcrumbContent((state) => state.setBreadcrumbContent);
  const assessmentDetails = useAssessment((state) => state.assessmentDetails);

  useEffect(() => {
    setBreadcrumbContent([
      <Link to="/assessments" className="transition-colors hover:text-foreground">
        Assessment
      </Link>,
      <Link to="/assessments/add" className="transition-colors hover:text-foreground">
        Add Assessment
      </Link>,
    ]);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Add Assessment</h1>
          </div>
          <p className="text-muted-foreground">Add new assessment to the system.</p>
        </div>
      </div>
      <div className="flex items-center flex-col gap-y-4">
        <div className="flex items-center gap-x-2 text-white">
          <div className="size-10 rounded-full flex items-center justify-center bg-primary">1</div>
          <hr
            className={cn("w-8", {
              "border-primary": assessmentDetails !== null,
            })}
          />
          <div
            className={cn("size-10 rounded-full flex items-center justify-center bg-muted", {
              "bg-primary": assessmentDetails !== null,
            })}
          >
            2
          </div>
        </div>
        <div className="text-muted-foreground">
          {assessmentDetails === null
            ? "Step 1: Fill out assessment details"
            : "Step 2: Add questions to your assessment"}
        </div>
        <div className="mt-18 flex w-full">
          {assessmentDetails === null ? <AssessmentDetailsForm /> : <AddQuestions />}
        </div>
      </div>
    </div>
  );
};

export default AddAssessment;
