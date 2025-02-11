import { useEffect, useState } from "react";
import { formatCardNumber, formatCVV } from "../../utils/cardnumber";
import { paymentMethodProps } from "../type";

export const CreditCard = () => {
  const [cardData, setCardData] = useState<Array<paymentMethodProps>>([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/payment-method")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      })
      .finally(() => setLoad(true));
  }, []);
  return (
    <>
      {load && (
        <div className="flex p-6 w-100 h-[240px] justify-between drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] flex-col bg-[url('./public/cardbg.png')] dark:bg-[url('./public/carlightbg.png')]">
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
