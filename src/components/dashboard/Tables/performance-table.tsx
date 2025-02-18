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
      },
    );
  }, []);

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--performance-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="h-full rounded-2xl bg-white px-4 py-6 drop-shadow-xl xl:w-1/3 xl:max-w-[500px] dark:bg-darkDetail">
      <div className="flex flex-col pb-5">
        <span className="text-xs font-semibold uppercase text-placeholderColor">
          performance
        </span>
        <span className="text-lg font-semibold text-detailColor dark:text-white">
          Total orders
        </span>
      </div>
      <CardContent>
        <ChartContainer
          className="mx-auto h-[400px] max-w-full xl:h-[350px] xl:max-w-full"
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
