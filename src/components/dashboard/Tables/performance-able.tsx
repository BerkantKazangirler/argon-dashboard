export const PerformanceTable = () => {
  return (
    <div className="w-1/2 h-full bg-white dark:bg-darkDetail px-4 py-6 rounded-2xl drop-shadow-xl">
      <div className="flex flex-col">
        <span className="text-placeholderColor text-xs uppercase font-semibold">
          performance
        </span>
        <span className="text-detailColor dark:text-white font-semibold text-lg">
          Total orders
        </span>
      </div>
    </div>
  );
};
