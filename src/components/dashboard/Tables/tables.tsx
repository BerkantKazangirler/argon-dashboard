import {
  SaleTable,
  PerformanceTable,
  VisitTable,
  TraficTable,
} from "@/components";

export const Tables = () => {
  return (
    <>
      <div className="w-full flex flex-col xl:flex-row gap-3">
        <SaleTable />
        <PerformanceTable />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-3">
        <VisitTable />
        <TraficTable />
      </div>
    </>
  );
};
