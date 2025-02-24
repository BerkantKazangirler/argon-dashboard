import { useEffect, useState } from "react";
import { Button, SvgEdit, SvgTrash } from "@/components";

import { billingInformationProps } from "@/components/type";
import { request } from "@/utils/fetch-data";

export const Information = () => {
  const [cardData, setCardData] = useState<Array<billingInformationProps>>([]);

  useEffect(() => {
    request<Array<billingInformationProps>>("/billing-information", "GET").then(
      (data) => {
        setCardData(data);
      },
    );
  }, []);
  return (
    <div className="-mx-2 flex w-full flex-col rounded-2.5xl bg-white p-6 drop-shadow-xl xl:mx-0 dark:bg-darkDetail">
      <span className="text-lg font-bold text-detailColor dark:text-white">
        Billing Information
      </span>
      <div className="flex flex-col gap-4">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg bg-informationBg p-4 dark:bg-darkBg"
          >
            <div className="flex flex-row justify-between">
              <span className="text-sm font-bold text-tableTr dark:text-white">
                {data.name}
              </span>
              <div className="flex flex-row gap-5">
                <Button className="flex flex-row gap-1">
                  <SvgTrash className="my-auto size-4 fill-detailRed" />
                  <span className="my-auto text-2xs font-bold text-detailRed">
                    DELETE
                  </span>
                </Button>
                <Button className="flex flex-row gap-1">
                  <SvgEdit className="my-auto size-3 fill-detailColor dark:fill-white" />
                  <span className="my-auto text-2xs font-bold text-detailColor dark:text-white">
                    EDIT
                  </span>
                </Button>
              </div>
            </div>
            <div className="w-fit">
              <div className="flex flex-row gap-1 text-xs">
                <h4 className="text-placeholderColor">Company Name:</h4>
                <h5 className="font-bold text-tableTr dark:text-white">
                  {data.companyname}
                </h5>
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
