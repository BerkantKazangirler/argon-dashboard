import {
  Card,
  CreditCard,
  Information,
  Invoices,
  Method,
  Transactions,
} from "@/components";

export const BillingPage = () => {
  return (
    <>
      <div className="flex flex-row mt-3 gap-6 h-full">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-8">
            <CreditCard />
            <Card />
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
