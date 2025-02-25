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
    <Card className="flex pl-0 pr-4 h-min">
      <div className="h-[294px] w-5 bg-primary rounded-l-md"></div>
      <div className="flex flex-1 flex-col gap-y-4 py-4 pl-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="secondary">Question {index + 1}</Badge>
            </div>
            <div>
              <div className="mt-4 gap-x-4 flex items-center justify-end">
                <EditCreatedQuestionDialog question={question} index={index} options={options} />
                <DeleteCreatedQuestionDialog index={index} />
              </div>
            </div>
          </div>
          <div className="border-b-1 border border-b-input p-4 rounded-md">
            <p className="text-semibold line-clamp-3">{question}</p>
          </div>
        </div>
        <div className="space-y-3">
          {options.map((option, index) => (
            <div className="flex items-center justify-between truncate gap-x-3">
              <p
                className={cn("text-sm", {
                  "font-semibold": option.isCorrectAnswer,
                  "text-muted-foreground": !option.isCorrectAnswer,
                })}
              >
                <strong>Option {index + 1} :</strong> {option.label}
              </p>
              {option.isCorrectAnswer && (
                <span className="px-2 py-1 text-xs text-green-600 bg-green-100 rounded-full">
                  Correct Answer
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CreatedQuestion;
