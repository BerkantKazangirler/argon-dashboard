import { BillingCard } from "../components/billing/card";
import { CreditCard } from "../components/billing/credit-card";
import { Information } from "../components/billing/information";
import { Invoices } from "../components/billing/invoices";
import { Method } from "../components/billing/method";
import { Transactions } from "../components/billing/transactions";

export const BillingPage = () => {
  return (
    <>
      <div className="flex flex-row mt-3 gap-6 h-full">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-8">
            <CreditCard />
            <BillingCard />
          </div>
          <Method />
        </div>
        <Invoices />
      </div>
      <div className="flex flex-row w-full gap-4 mt-4">
        <Information />
        <Transactions />
      </div>
    </>
  );
};
