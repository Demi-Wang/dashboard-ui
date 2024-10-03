"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "@/data/analytics";
import { TrendingUp } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const chartConfig = {
  uv: {
    label: "uv",
    color: "hsl(var(--chart-1))",
  },
  pv: {
    label: "pv",
    color: "hsl(var(--chart-2))",
  },
  amt: {
    label: "amt",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics For This Year</CardTitle>
          <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            // style={{ width: "100%", height: 300 }}
          >
            <LineChart
              accessibilityLayer
              data={data}
              width={1100}
              height={300}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <Line
                dataKey="uv"
                type="monotone"
                stroke="var(--color-uv)"
                strokeWidth={2}
                // dot={false}
                dot={{
                  fill: "var(--color-uv)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
              <Line
                dataKey="pv"
                type="monotone"
                stroke="var(--color-pv)"
                strokeWidth={2}
                // dot={false}
                dot={{
                  fill: "var(--color-pv)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
              <CartesianGrid stroke="#eee" vertical={false} />
              <XAxis
                dataKey="name"
                // tickLine={false}
                // axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <YAxis />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by ???% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Showing total visitors for the last 12 months
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default AnalyticsChart;
