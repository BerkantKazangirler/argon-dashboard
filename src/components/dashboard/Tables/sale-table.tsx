export const SaleTable = () => {
  return (
    <div className="w-full rounded-2xl px-4 py-6 drop-shadow-xl bg-[linear-gradient(81.62deg,_#313860_2.25%,_#151928_79.87%)] dark:bg-gradient-to-t dark:bg-darkDetail h-full">
      <div className="flex flex-col">
        <span className="text-white font-semibold">Sales overview</span>
        <div className="flex flex-row gap-1 text-sm">
          <span className="text-green-400">(+5) more</span>
          <span>in 2021</span>
        </div>
      </div>
    </div>
  );
};
