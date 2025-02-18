import { CardPage, Tables } from "@/components";

export const Dashboard = () => {
  return (
    <div className="mt-3 flex flex-col gap-3">
      <div className="flex w-full flex-row justify-between gap-4">
        <CardPage />
      </div>
      <Tables />
    </div>
  );
};
