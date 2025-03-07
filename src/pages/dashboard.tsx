import { CardPage, Tables } from "@/components";

export const Dashboard = () => {
  return (
    <div className="mt-3 flex flex-col gap-3">
      <div className="flex w-full flex-col justify-between gap-4 px-1 md:flex-row md:px-0">
        <CardPage />
      </div>
      <Tables />
    </div>
  );
};
