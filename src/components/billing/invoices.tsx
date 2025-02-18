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
      },
    );
  }, []);

  return (
    <div className="flex h-[416px] w-full flex-col rounded-2.5xl bg-white p-4 drop-shadow-xl dark:bg-darkDetail">
      <div className="flex flex-row justify-between px-2 py-3">
        <span className="my-auto font-bold leading-none text-detailColor dark:text-white">
          Invoices
        </span>
        <Button className="w-fit rounded-lg border border-detailBg px-4 py-2 text-2xs font-bold text-detailBg dark:border-white dark:text-white">
          VIEW ALL
        </Button>
      </div>
      <div className="flex flex-col gap-5 px-2">
        {cardData.map((data, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-detailColor dark:text-white">
                {formatDate(data.date)}
              </span>
              <span className="text-xs font-bold text-placeholderColor">
                #{data.id}
              </span>
            </div>
            <div className="my-auto flex flex-row gap-3">
              <span className="text-xs font-bold text-placeholderColor">
                ${data.amount}
              </span>
              <Button className="flex gap-1 text-2xs font-bold text-detailColor dark:text-white">
                <TextDocumentSvg className="size-5 fill-detailColor dark:fill-white" />
                PDF
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
