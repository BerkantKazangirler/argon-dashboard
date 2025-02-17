import { CardPage, Tables } from "@/components";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="flex flex-row gap-4 h-32 justify-between w-full">
        <CardPage />
      </div>
      <Tables />
    </div>
  );
};
