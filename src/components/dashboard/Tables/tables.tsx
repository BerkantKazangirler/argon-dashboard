import { PerformanceTable } from "./performanceTable";
import { SaleTable } from "./saleTable";
import { TraficTable } from "./traficTable";
import { VisitTable } from "./visitTable";

export const Tables = () => {
  return (
    <>
      <div className="w-full flex flex-row gap-3 h-100">
        <SaleTable />
        <PerformanceTable />
      </div>
      <div className="w-full flex flex-row gap-3 h-[244px]">
        <VisitTable />
        <TraficTable />
      </div>
    </>
  );
};
