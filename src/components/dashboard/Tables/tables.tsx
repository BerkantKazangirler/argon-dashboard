import {
  SaleTable,
  PerformanceTable,
  VisitTable,
  TraficTable,
} from "@/components";

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
