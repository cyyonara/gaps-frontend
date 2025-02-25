import { Plus, Trash } from "lucide-react";
import CustomButton from "@/components/common/CustomButton";
import {
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, useFieldArray } from "react-hook-form";
import { IAddQuestionFormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { addQuestionSchema } from "@/helpers/validations";
import useAssessment from "@/hooks/states/useAssessment";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AddQuestionDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { questions, addQuestion } = useAssessment((state) => state);

  const form = useForm<IAddQuestionFormValues>({
    defaultValues: {
      question: "",
      options: [
        {
          label: "Option",
          isCorrectAnswer: false,
        },
      ],
    },
    resolver: zodResolver(addQuestionSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "options",
    control: form.control,
  });

  const deleteOption = (index: number) => {
    if (fields.length === 1) return;
    remove(index);
  };

  const setCorrectAnswer = (index: number) => {
    const currentOptions = form.getValues("options");

    const updatedOptions = currentOptions.map((option, i) => ({
      ...option,
      isCorrectAnswer: i === index,
    }));

    form.setValue("options", updatedOptions);
  };

  const addOption = () => {
    append({ label: "", isCorrectAnswer: false });

    setTimeout(() => {
      form.setFocus(`options.${fields.length}.label`);
    }, 0);
  };

  const handleAddQuestion = (values: IAddQuestionFormValues) => {
    addQuestion(values);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton icon={Plus} className="bg-green-600 hover:bg-green-500">
          Add question
        </CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add question</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form id="add-question" onSubmit={form.handleSubmit(handleAddQuestion)}>
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question {questions.length + 1}</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter question...." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-10">
              <div className="flex flex-col gap-y-4">
                {fields.map((optionField, index) => (
                  <div key={optionField.id} className="flex flex-col gap-y-2">
                    <Label htmlFor={optionField.id} className="text-muted-foreground text-sm">
                      Option {index + 1}
                    </Label>
                    <div className="flex items-center">
                      <div className="relative flex-1">
                        <FormField
                          name={`options.${index}.isCorrectAnswer`}
                          render={({ field }) => (
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={() => setCorrectAnswer(index)}
                              {...field}
                              className="absolute left-[12px] top-[50%] -translate-y-[50%] border-muted-foreground"
                            />
                          )}
                        />
                        <FormField
                          name={`options.${index}.label`}
                          render={({ field }) => (
                            <Input
                              id={optionField.id}
                              className="pl-[40px] rounded-r-none border-r-0"
                              {...field}
                              placeholder="Enter option label..."
                            />
                          )}
                        />
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger type="button" onClick={() => deleteOption(index)}>
                            <Button className="rounded-l-none">
                              <Trash size={15} className="text-white" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Delete option</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    {form.formState.errors.options &&
                    form.formState.errors.options[index]?.label?.message ? (
                      <p className="text-[0.8rem] font-medium text-destructive">Required</p>
                    ) : null}
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 text-muted-foreground"
                    onClick={addOption}
                  >
                    Add option
                  </Button>

                  {form.formState.errors.options && (
                    <p className="text-[0.8rem] font-medium text-destructive">
                      {form.formState.errors.options?.root?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button form="add-question" type="submit">
            Add this question
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestionDialog;
