"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { status: "passed", rate: 275, fill: "#3D8D7A" },
  { status: "failed", rate: 200, fill: "#D84040" },
];

const chartConfig = {
  rate: {
    label: "Rate",
  },
  passed: {
    label: "Passed",
    color: "#3D8D7A",
  },
  failed: {
    label: "Failed",
    color: "#D84040",
  },
} satisfies ChartConfig;

const ResultChart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center">
        <CardTitle>Pie Chart - Result Analysis</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="items-center justify-center flex-1 h-[100%] ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="rate" hideLabel />} />
            <Pie data={chartData} dataKey="rate">
              <LabelList
                dataKey="status"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing general total asessment result rate
        </div>
      </CardFooter>
    </Card>
  );
};
export default ResultChart;
