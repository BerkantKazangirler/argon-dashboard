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
      <div className="flex flex-row mt-3 w-full gap-6 h-full">
        <div className="flex flex-col gap-5">
          <div className="flex w-full flex-row gap-8">
            <CreditCard />
            <Card />
          </div>
          <Method />
        </div>
        <Invoices />
      </div>
      <div className="flex px-5 xl:px-0 flex-col xl:flex-row w-full gap-2 2xl:gap-4 mt-4">
        <Information />
        <Transactions />
      </div>
    </>
  );
};
