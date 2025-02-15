import CourseCard from "./CourseCard";

const CourseCardContainer = () => {
  const courses = [
    {
      title: "Course 1",
      description: "This is a description",
      department: "College of Computer Studies",
      assessment: 4,
    },
    {
      title: "Course 2",
      description: "This is a description",
      department: " College of Computer Studies",
      assessment: 5,
    },
    {
      title: "Course 3",
      description: "This is a description",
      department: " College of Computer Studies",
      assessment: 6,
    },
    {
      title: "Course 4",
      description: "This is a description",
      department: " College of Computer Studies",
      assessment: 7,
    },
    {
      title: "Course 2",
      description: "This is a description",
      department: " College of Computer Studies",
      assessment: 5,
    },
    {
      title: "Course 3",
      description: "This is a description",
      department: "College of Computer Studies",
      assessment: 6,
    },
    {
      title: "Course 4",
      description: "This is a description",
      department: " College of Computer Studies",
      assessment: 7,
    },
  ];

  return (
    <div className="flex-1 text-black">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
            department={course.department}
            assessments={course.assessment}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCardContainer;
