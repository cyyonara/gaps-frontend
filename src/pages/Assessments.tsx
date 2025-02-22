import AddAssessmentDialog from "@/components/assessments/AddAssessmentDialog";
import AssessmetsTable from "@/components/assessments/AssessmetsTable";
const Assessments = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Assessments</h1>
            <div className="rounded-full bg-primary/10 px-3 py-[6px] text-xs text-primary">
              100 total
            </div>
          </div>
          <p className="text-muted-foreground">Here you will see list of assessments.</p>
        </div>
        <AddAssessmentDialog />
      </div>
      <AssessmetsTable />
    </div>
  );
};

export default Assessments;
