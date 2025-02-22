import NumberCardsContainer from "@/components/dashboard/NumberCardsContainer";
import NumberOfUserChart from "@/components/dashboard/AssessmentChart";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import DepartmentsChart from "@/components/dashboard/DepartmentsChart";
import DeanUpdateChart from "@/components/dashboard/DeanUpdateChart";
import ResultChart from "@/components/dashboard/ResultChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col pb-8 space-y-4 md:space-y-8">
      <div className="leading-tight">
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <div className="text-xs text-muted-foreground">
          Here you will see the system's dashboard.
        </div>
      </div>
      <div className="flex flex-col mt-8 gap-y-8">
        <NumberCardsContainer />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <RecentActivityCard />
          <NumberOfUserChart />
        </div>

        <div className="flex justify-start w-full gap-x-8">
          <div className="flex flex-col gap-y-8">
            <DeanUpdateChart />
            <ResultChart />
          </div>
          <div className="flex-1 ">
            <DepartmentsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
