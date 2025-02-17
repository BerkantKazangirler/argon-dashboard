import { useEffect, useState } from "react";
import { SvgEdit, SvgTrash } from "@/components";

import { billingInformationProps } from "@/components/type";
import { request } from "@/utils/fetchdata";

export const Information = () => {
  const [cardData, setCardData] = useState<Array<billingInformationProps>>([]);

  useEffect(() => {
    request<Array<billingInformationProps>>("/billing-information", "GET").then(
      (data) => {
        setCardData(data);
      }
    );
  }, []);
  return (
    <div className="flex flex-col w-full p-6 bg-white dark:bg-darkDetail drop-shadow-xl rounded-2.5xl">
      <span className="text-detailColor dark:text-white text-lg font-bold">
        Billing Information
      </span>
      <div className="flex flex-col gap-4">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-informationBg dark:bg-darkBg rounded-lg p-4"
          >
            <div className="flex flex-row justify-between">
              <span className="text-tableTr font-bold text-sm dark:text-white">
                {data.name}
              </span>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-1">
                  <SvgTrash className="my-auto size-4 fill-detailRed" />
                  <span className="text-detailRed font-bold text-2xs my-auto">
                    DELETE
                  </span>
                </div>
                <div className="flex flex-row gap-1">
                  <SvgEdit className="my-auto size-3 fill-detailColor dark:fill-white" />
                  <span className="text-detailColor dark:text-white font-bold text-2xs my-auto">
                    EDIT
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-1 text-xs">
                <span className="text-placeholderColor">Company Name:</span>
                <span className="font-bold text-tableTr dark:text-white">
                  {data.companyname}
                </span>
              </div>
              <div className="flex flex-row gap-1 text-xs">
                <span className="text-placeholderColor">Email Address:</span>
                <span className="font-bold text-tableTr dark:text-white">
                  {data.email}
                </span>
              </div>
              <div className="flex flex-row gap-1 text-xs">
                <span className="text-placeholderColor">VAT Number:</span>
                <span className="font-bold text-tableTr dark:text-white">
                  {data.vatnumber}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
