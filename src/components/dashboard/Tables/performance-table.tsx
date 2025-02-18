import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useEffect, useState } from "react";
import { request } from "@/utils/fetchdata";
import { performanceProps } from "@/components/type";
import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const PerformanceTable = () => {
  const [data, setData] = useState<performanceProps[]>([]);

  useEffect(() => {
    request<Array<performanceProps>>("/performance-order", "GET").then(
      (data) => {
        setData(data);
      }
    );
  }, []);

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--performance-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="xl:w-1/3 xl:max-w-[500px] h-full bg-white dark:bg-darkDetail px-4 py-6 rounded-2xl drop-shadow-xl">
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
          className="max-w-full xl:max-w-full mx-auto h-[400px] xl:h-[350px]"
          config={chartConfig}
        >
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string | any[]) => value.slice(0, 3)}
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
