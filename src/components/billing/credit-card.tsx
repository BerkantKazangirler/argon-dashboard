import { useEffect, useState } from "react";
import { paymentMethodProps } from "@/components/type";
import { request } from "@/utils/fetchdata";
import { formatCardNumber, formatCVV } from "@/utils/formatcardnumber";

export const CreditCard = () => {
  const [cardData, setCardData] = useState<Array<paymentMethodProps>>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    request<Array<paymentMethodProps>>("/payment-method", "GET")
      .then((data) => {
        setCardData(data);
      })
      .finally(() => setLoad(true));
  }, []);
  return (
    <>
      {load && (
        <div className="hidden h-full min-w-[460px] flex-col justify-between bg-[url('./public/cardbg.png')] p-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] xl:flex dark:bg-[url('./public/carlightbg.png')]">
          <div className="flex flex-row justify-between">
            <span className="text-lg font-bold">{cardData[0].name}</span>
            <img src={"./public/icon/mcard.png"} />
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-2xl font-bold">
              {formatCardNumber(cardData[0].cardnumber)}
            </span>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col">
                <span className="text-2xs">VALID THRU</span>
                <span className="text-sm font-bold">
                  {cardData[0].validthru}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xs">CVV</span>
                <span className="text-sm font-bold">
                  {formatCVV(cardData[0].cvv)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
