"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const chartData = [
  { month: "January", assessment: 186, mobile: 80 },
  { month: "February", assessment: 305, mobile: 200 },
  { month: "March", assessment: 237, mobile: 120 },
  { month: "April", assessment: 73, mobile: 190 },
  { month: "May", assessment: 209, mobile: 130 },
  { month: "June", assessment: 214, mobile: 140 },
];
const chartConfig = {
  assessment: {
    label: "Assessments",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const AssessmentChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Assessments</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="assessment" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="assessment" layout="vertical" fill="#D84040" radius={4}>
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
                
              />
              <LabelList
                dataKey="assessment"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total number of registered assessments in the system for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default AssessmentChart;
