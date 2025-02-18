import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { salesOverviewProps } from "@/components/type";
import { request } from "@/utils/fetchdata";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const SaleTable = () => {
  const [data, setData] = useState<salesOverviewProps[]>([]);

  useEffect(() => {
    request<Array<salesOverviewProps>>("/sales-overview", "GET").then(
      (data) => {
        setData(data);
      },
    );
  }, []);

  return (
    <div className="h-full rounded-2xl bg-[linear-gradient(81.62deg,_#313860_2.25%,_#151928_79.87%)] px-4 pt-4 drop-shadow-xl xl:w-full dark:bg-darkDetail dark:bg-gradient-to-t">
      <div className="flex w-full flex-col pb-5">
        <span className="font-semibold text-white">Sales overview</span>
        <div className="flex flex-row gap-1 text-sm">
          <span className="text-green-400">(+5) more</span>
          <span>in 2021</span>
        </div>
        <CardContent>
          <ChartContainer
            className="h-[350px] max-h-[350px] w-full pt-3 2xl:max-h-[380px]"
            config={chartConfig}
          >
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{
                left: -20,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={3}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                dataKey="mobile"
                type="natural"
                fill="var(--color-mobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </div>
    </div>
  );
};
