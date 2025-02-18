import {
  SaleTable,
  PerformanceTable,
  VisitTable,
  TraficTable,
} from "@/components";

export const Tables = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-3 xl:flex-row">
        <SaleTable />
        <PerformanceTable />
      </div>
      <div className="flex w-full flex-col gap-3 md:flex-row">
        <VisitTable />
        <TraficTable />
      </div>
    </>
  );
};
