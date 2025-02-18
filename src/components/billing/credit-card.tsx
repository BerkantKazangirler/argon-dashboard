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
        <div className="flex p-6 min-w-[460px] justify-between drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] flex-col bg-[url('./public/cardbg.png')] dark:bg-[url('./public/carlightbg.png')]">
          <div className="flex flex-row justify-between">
            <span className="font-bold text-lg">{cardData[0].name}</span>
            <img src={"./public/icon/mcard.png"} />
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold text-2xl">
              {formatCardNumber(cardData[0].cardnumber)}
            </span>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col">
                <span className="text-2xs">VALID THRU</span>
                <span className="font-bold text-sm">
                  {cardData[0].validthru}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xs">CVV</span>
                <span className="font-bold text-sm">
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
