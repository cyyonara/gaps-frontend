import { ArrowLeft } from "lucide-react";
import CustomButton from "@/components/common/CustomButton";
import { Button } from "@/components/ui/button";
import useAssessment from "@/hooks/states/useAssessment";
import AddQuestionDialog from "@/components/assessments/AddQuestionDialog";
import CreatedQuestion from "./CreatedQuestion";

const AddQuestions = () => {
  const { questions } = useAssessment((state) => state);

  return (
    <div className="flex flex-col items-center w-full gap-y-6">
      <div className="flex border-x border-t fixed items-center justify-end gap-x-4 p-4 inset-x-0 bottom-0 bg-background">
        <CustomButton variant="outline" icon={ArrowLeft}>
          Go back
        </CustomButton>
        <AddQuestionDialog />
        <Button disabled={questions.length === 0}>Save</Button>
      </div>
      <div className="w-full grid grid-cols-3 gap-4 grid-flow-dense">
        {questions.map(({ question, options }, i) => (
          <CreatedQuestion key={i.toString()} index={i} question={question} options={options} />
        ))}
      </div>
    </div>
  );
};

export default AddQuestions;
