import { Plus } from "lucide-react";
import CustomButton from "@/components/common/CustomButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useBreadcrumbContent from "@/hooks/states/useBreadcrumbContent";

const Assessments = () => {
  const setBreadcrumbContent = useBreadcrumbContent((state) => state.setBreadcrumbContent);

  useEffect(() => {
    setBreadcrumbContent([
      <Link to="/assessments" className="transition-colors hover:text-foreground">
        Assessment
      </Link>,
    ]);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Assessments</h1>
            <div className="text-primary py-[6px] px-3 rounded-full text-xs bg-primary/10">
              129 total
            </div>
          </div>
          <p className="text-muted-foreground">Here you will see the list of assessments.</p>
        </div>
        <Link to="/assessments/add">
          <CustomButton icon={Plus}>Add Assessment</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Assessments;
