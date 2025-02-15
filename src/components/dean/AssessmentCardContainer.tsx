import AssessmentCard from "./AssessmentCard";

const AssessmentCardContainer = () => {
  const assessments = [
    {
      title: "Prelim - Programming 1",
      description: "This is a description",
      mentorAssigned: 20,
    },
    {
      title: "Midterm - Programming 1",
      description: "This is a description",
      mentorAssigned: 20,
    },
    {
      title: "Finals - Programming 1",
      description: "This is a description",
      mentorAssigned: 20,
    },
    {
      title: "Prelim - Web development",
      description: "This is a description",
      mentorAssigned: 20,
    },
    {
      title: "Midterm - Web development",
      description: "This is a description",
      mentorAssigned: 20,
    },
    {
      title: "Finals - Web development",
      description: "This is a description",
      mentorAssigned: 20,
    },
    {
      title: "Prelim - Database management",
      description: "This is a description",
      mentorAssigned: 20,
    },
    {
      title: "Midterm - Database management",
      description: "This is a description",
      mentorAssigned: 20,
    },
    {
      title: "Finals - Database management",
      description: "This is a description",
      mentorAssigned: 20,
    },
  ];

  return (
    <div className="flex-1 text-black">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {assessments.map((assessment) => (
          <AssessmentCard
            key={assessment.title}
            title={assessment.title}
            description={assessment.description}
            mentorAssigned={assessment.mentorAssigned}
          />
        ))}
      </div>
    </div>
  );
};

export default AssessmentCardContainer;
