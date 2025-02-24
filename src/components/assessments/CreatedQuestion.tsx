import { IAddQuestionFormValues } from "@/types";
import { Card } from "@/components/ui/card";
import { CheckCircle, Trash, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import EditCreatedQuestionDialog from "@/components/assessments/EditCreatedQuestionDialog";
import DeleteCreatedQuestionDialog from "./DeleteCreatedQuestionDialog";

interface Props extends IAddQuestionFormValues {
  index: number;
}

const CreatedQuestion = ({ question, options, index }: Props) => {
  return (
    <Card className="p-4 h-min">
      <div className="flex flex-col gap-y-4">
        <div className="space-y-2">
          <Badge variant="secondary">Question {index + 1}</Badge>
          <p className="text-base line-clamp-3">{question}</p>
        </div>
        <div className="space-y-3">
          {options.map((option) => (
            <div className="flex items-center truncate gap-x-3">
              {option.isCorrectAnswer ? (
                <CheckCircle size={18} className="text-green-600" />
              ) : (
                <XCircle size={18} className="text-primary" />
              )}
              <p
                className={cn("text-sm", {
                  "font-semibold": option.isCorrectAnswer,
                  "text-muted-foreground": !option.isCorrectAnswer,
                })}
              >
                {option.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 gap-x-4 flex items-center justify-end">
        <EditCreatedQuestionDialog question={question} index={index} options={options} />
        <DeleteCreatedQuestionDialog index={index} />
      </div>
    </Card>
  );
};

export default CreatedQuestion;
