import { PerformanceTable } from "./performance-able";
import { SaleTable } from "./sale-table";
import { TraficTable } from "./trafic-table";
import { VisitTable } from "./visit-table";

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
