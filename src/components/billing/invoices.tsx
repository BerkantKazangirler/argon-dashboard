import { useEffect, useState } from "react";
import { Button, TextDocumentSvg } from "@/components";
import { request } from "@/utils/fetchdata";

import { paymentInvoicesProps } from "@/components/type";
import { formatDate } from "@/utils/formatdate";

export const Invoices = () => {
  const [cardData, setCardData] = useState<Array<paymentInvoicesProps>>([]);

  useEffect(() => {
    request<Array<paymentInvoicesProps>>("/payment-invoices", "GET").then(
      (data) => {
        setCardData(data);
      }
    );
  }, []);

  return (
    <div className="flex flex-col rounded-2.5xl drop-shadow-xl w-full h-[410px] bg-white dark:bg-darkDetail p-4">
      <div className="flex flex-row justify-between px-2 py-3">
        <span className="font-bold leading-none my-auto text-detailColor dark:text-white">
          Invoices
        </span>
        <Button className="text-detailBg font-bold text-2xs border rounded-lg border-detailBg py-2 w-fit px-4 dark:text-white dark:border-white">
          VIEW ALL
        </Button>
      </div>
      <div className="flex flex-col gap-5 px-2">
        {cardData.map((data, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-detailColor dark:text-white font-bold text-sm">
                {formatDate(data.date)}
              </span>
              <span className="text-placeholderColor text-xs font-bold">
                #{data.id}
              </span>
            </div>
            <div className="flex flex-row my-auto gap-3">
              <span className="text-placeholderColor font-bold text-xs">
                ${data.amount}
              </span>
              <span className="text-2xs flex gap-1 text-detailColor dark:text-white font-bold">
                <TextDocumentSvg className="fill-detailColor size-5 dark:fill-white" />
                PDF
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
