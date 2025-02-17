import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { request } from "../../../utils/fetchdata";
import { salesOverviewProps } from "../../type";

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

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

export const SaleTable = () => {
  const [data, setData] = useState<salesOverviewProps[]>([]);

  useEffect(() => {
    request<Array<salesOverviewProps>>("/sales-overview", "GET").then(
      (data) => {
        setData(data);
      }
    );
  }, []);

  return (
    <div className="w-full rounded-2xl px-4 py-6 drop-shadow-xl bg-[linear-gradient(81.62deg,_#313860_2.25%,_#151928_79.87%)] dark:bg-gradient-to-t dark:bg-darkDetail h-full">
      <div className="flex flex-col pb-5">
        <span className="text-white font-semibold">Sales overview</span>
        <div className="flex flex-row gap-1 text-sm">
          <span className="text-green-400">(+5) more</span>
          <span>in 2021</span>
        </div>
        <CardContent>
          <ChartContainer
            className="h-[400px] py-2 w-full"
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
