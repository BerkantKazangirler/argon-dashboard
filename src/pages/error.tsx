import { Bg, SignNav } from "@/components";

export const Error = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Bg />
      <div className="z-20 mx-5 flex w-full flex-row gap-4">
        <div className="flex w-full flex-col text-white">
          <SignNav />
          <div className="absolute top-[40%] mx-auto flex w-full flex-col items-center justify-center">
            <span className="font-Poppins text-6xl italic text-white">404</span>
            <span className="font-Poppins text-3xl italic text-white text-opacity-60">
              This page is not found
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
