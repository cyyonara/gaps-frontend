import Headings from "@/components/dean/Headings";
import { Button } from "@/components/ui/button";
import AssessmentCardContainer from "@/components/dean/AssessmentCardContainer";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Assessments = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/dean/courses">Courses</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <Link to="/dean/assessments">Assessments</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <Link to="/dean/profile">Profile</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Headings
        title="Assessments"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <div className="pt-10 py-5 flex flex-col space-y-4">
        <div className="flex right-0 justify-end"></div>
        <AssessmentCardContainer />
      </div>
      <div className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Assessments;
