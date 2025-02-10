import { Button } from "../elements/button";
import { Input } from "../elements/input";

export const Method = () => {
  return (
    <div className="bg-white dark:bg-darkDetail drop-shadow-xl w-full p-4 rounded-2.5xl gap-5 flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="font-bold text-sm leading-none my-auto text-detailColor dark:text-white">
          Payment Method
        </span>

        <Button className="bg-detailColo rounded-lg bg-detailColor dark:bg-detailBg text-2xs w-32 px-2 py-3 font-bold">
          ADD A NEW CARD
        </Button>
      </div>
      <div className="flex flex-row w-full gap-5">
        <div className="border border-inputBorder dark:border-none w-full relative rounded-lg">
          <img
            src={"./public/icon/mastercard.png"}
            className="absolute mt-6 ml-5"
          />
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className="absolute right-4 mt-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2611_5708)">
              <path
                d="M2.00012 9.23V10.75C2.00012 10.89 2.11012 11 2.25012 11H3.77012C3.83512 11 3.90012 10.975 3.94512 10.925L9.40512 5.47L7.53012 3.595L2.07512 9.05C2.02512 9.1 2.00012 9.16 2.00012 9.23ZM10.8551 4.02C11.0501 3.825 11.0501 3.51 10.8551 3.315L9.68512 2.145C9.49012 1.95 9.17512 1.95 8.98012 2.145L8.06512 3.06L9.94012 4.935L10.8551 4.02Z"
                fill="#2D3748"
              />
            </g>
            <defs>
              <clipPath id="clip0_2611_5708">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0.500122 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <Input
            placeholder="7812 2139 0823 XXXX"
            className="indent-14 text-sm leading-6 rounded-lg w-full py-5 pr-10 text-black dark:text-white dark:bg-darkBg"
          />
        </div>
        <div className="border border-inputBorder dark:border-none w-full relative rounded-lg">
          <img src={"./public/icon/visa.png"} className="absolute mt-7 ml-5" />
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className="absolute right-4 mt-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2611_5708)">
              <path
                d="M2.00012 9.23V10.75C2.00012 10.89 2.11012 11 2.25012 11H3.77012C3.83512 11 3.90012 10.975 3.94512 10.925L9.40512 5.47L7.53012 3.595L2.07512 9.05C2.02512 9.1 2.00012 9.16 2.00012 9.23ZM10.8551 4.02C11.0501 3.825 11.0501 3.51 10.8551 3.315L9.68512 2.145C9.49012 1.95 9.17512 1.95 8.98012 2.145L8.06512 3.06L9.94012 4.935L10.8551 4.02Z"
                fill="#2D3748"
              />
            </g>
            <defs>
              <clipPath id="clip0_2611_5708">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0.500122 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <Input
            placeholder="7812 2139 0823 XXXX"
            className="indent-14 text-sm leading-6 rounded-lg w-full py-5 pr-10 text-black dark:text-white dark:bg-darkBg"
          />
        </div>
      </div>
    </div>
  );
};
