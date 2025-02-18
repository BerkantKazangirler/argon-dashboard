import { Bg, SignNav } from "@/components";

export const Error = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Bg />
      <div className="mx-5 z-20 flex flex-row gap-4 w-full">
        <div className="flex flex-col text-white w-full">
          <SignNav />
          <div className="absolute flex-col items-center top-[40%] mx-auto w-full justify-center flex">
            <span className="text-6xl font-Poppins italic text-white">404</span>
            <span className="text-3xl text-white text-opacity-60 font-Poppins italic">
              This page is not found
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
