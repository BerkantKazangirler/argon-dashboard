import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { CardContent } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";
import { useEffect, useState } from "react";
import { request } from "../../../utils/fetchdata";
import { performanceProps } from "../../type";

export const PerformanceTable = () => {
  const [data, setData] = useState<performanceProps[]>([]);

  useEffect(() => {
    request<Array<performanceProps>>("/performance-order", "GET").then(
      (data) => {
        setData(data);
      }
    );
  }, []);

  // const chartData = [
  //   { month: "January", desktop: 186 },
  //   { month: "February", desktop: 305 },
  //   { month: "March", desktop: 237 },
  //   { month: "April", desktop: 73 },
  //   { month: "May", desktop: 209 },
  //   { month: "June", desktop: 900 },
  // ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--performance-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-1/2 max-w-[500px] h-full bg-white dark:bg-darkDetail px-4 py-6 rounded-2xl drop-shadow-xl">
      <div className="flex flex-col pb-5">
        <span className="text-placeholderColor text-xs uppercase font-semibold">
          performance
        </span>
        <span className="text-detailColor dark:text-white font-semibold text-lg">
          Total orders
        </span>
      </div>
      <CardContent>
        <ChartContainer
          className="max-w-[450px] h-[350px]"
          config={chartConfig}
        >
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={9} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
};
