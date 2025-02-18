export const Bg = () => {
  return (
    <div className="fixed flex h-full w-full flex-col justify-between">
      <div className="-z-20 h-full w-full bg-blue-500 dark:bg-darkBg">
        <img src={"public/bg.png"} className="h-full w-full dark:opacity-0" />
      </div>
      <div className="-z-20 h-full w-full bg-[#F7FAFC] dark:bg-darkBottomBg"></div>
    </div>
  );
};
