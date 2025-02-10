export const SignInBg = () => {
  return (
    <>
      {/* <div className="bg-[url('./public/signbg.png')]  w-full h-[520px] -z-20 absolute">
        <div className="bg-[#3182CE] w-full h-full bg-opacity-80"></div>
      </div>
      <div className="bg-[#F7FAFC] bottom-0 w-full -z-20 absolute mt-[514px]"></div> */}

      <div className="flex bg-white dark:bg-darkBottomBg flex-col justify-between p-4 h-full w-full absolute -z-20">
        <div className="bg-[url('../public/signbg.png')] rounded-2.5xl h-[520px] w-full ">
          <div className="bg-[#3182CE] w-full h-full bg-opacity-80 rounded-2.5xl"></div>
        </div>
      </div>
    </>
  );
};
