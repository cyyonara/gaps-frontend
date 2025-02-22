"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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
  { department: "Computer Studies", rate: 186 },
  { department: "Engineering", rate: 305 },
  { department: "Education", rate: 237 },
  { department: "Business", rate: 73 },
  { department: "Medicine", rate: 209 },
  { department: "Hospitality", rate: 214 },
];

const chartConfig = {
  rate: {
    label: "Passing Rate",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const DepartmentsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Department's Passing Rate</CardTitle>
        <CardDescription>Rate of passing per department</CardDescription>
      </CardHeader>
      <CardContent className="mt-14">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="department"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="rate" fill="#D84040" radius={8}>
              <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total passing rate per department
        </div>
      </CardFooter>
    </Card>
  );
};

export default DepartmentsChart;
