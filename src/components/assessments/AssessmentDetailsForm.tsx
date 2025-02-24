import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IAddAssessmentFormValues, ICourseWithAudit } from "@/types";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "@/components/common/CustomButton";
import { ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { addAssessmentSchema } from "@/helpers/validations";
import SearchCourseDialog from "@/components/courses/SearchCourseDialog";
import useAssessment from "@/hooks/states/useAssessment";

const AssessmentDetailsForm = () => {
  const form = useForm<IAddAssessmentFormValues>({
    defaultValues: {
      title: "",
      description: "",
      course: null,
    },
    resolver: zodResolver(addAssessmentSchema),
  });

  const setAssessmentDetails = useAssessment((state) => state.setAssessmentDetails);

  useEffect(() => {
    form.setFocus("title");
  }, []);

  const handleGoToStepTwo = (values: IAddAssessmentFormValues) => {
    setAssessmentDetails(values);
  };

  return (
    <Form {...form}>
      <form
        className="mx-auto flex-1 max-w-[400px] space-y-4 flex flex-col"
        onSubmit={form.handleSubmit(handleGoToStepTwo)}
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter assessment title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Optional" className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="course"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <FormControl>
                <SearchCourseDialog
                  selectedCourse={field.value as ICourseWithAudit}
                  handleSelectCourse={(course) => form.setValue("course", course)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CustomButton icon={ArrowRight} iconPosition="right">
          Next
        </CustomButton>
      </form>
    </Form>
  );
};

export default AssessmentDetailsForm;
