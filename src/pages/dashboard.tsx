import { Card } from "../components/dashboard/card";
import { Tables } from "../components/dashboard/Tables/tables";
import { Footer } from "../components/footer";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-3 mt-6">
        <div className="flex flex-row gap-4 h-28 justify-between w-full">
          <Card
            money={"53,897"}
            moneydetail={"3,48"}
            user={"3,200"}
            userdetail={"5.20"}
            clients={"2,503"}
            clientdetail={"2.82"}
            sales={"173,000"}
            saledetail={"8.12"}
          />
        </div>
        <Tables />
        <Footer />
      </div>
    </>
  );
};
