export const Bg = () => {
  return (
    <>
      {/* <div className="bg-blue-500 dark:bg-darkBg w-full h-100 -z-20 absolute">
        <img src={"public/bg.png"} className="w-full h-full dark:opacity-0" />
      </div>
      <div className="bg-[#F7FAFC] dark:bg-darkBottomBg bottom-5 w-full -z-20 absolute mt-[514px]"></div> */}

      <div className="flex flex-col justify-between h-full w-full absolute">
        <div className="bg-blue-500 dark:bg-darkBg w-full h-99 -z-20">
          <img src={"public/bg.png"} className="w-full h-full dark:opacity-0" />
        </div>
        <div className="bg-[#F7FAFC] dark:bg-darkBottomBg h-full w-full -z-20"></div>
      </div>
    </>
  );
};
