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
      <div className="mt-3 flex h-full w-full flex-row gap-6">
        <div className="flex flex-col gap-5">
          <div className="flex w-full flex-row gap-8">
            <CreditCard />
            <Card />
          </div>
          <Method />
        </div>
        <Invoices />
      </div>
      <div className="mt-4 flex w-full flex-col gap-2 px-5 xl:flex-row xl:px-0 2xl:gap-4">
        <Information />
        <Transactions />
      </div>
    </>
  );
};
