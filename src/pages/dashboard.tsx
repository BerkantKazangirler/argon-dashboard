import { useEffect, useState } from "react";
import { Card } from "../components/dashboard/card";
import { Tables } from "../components/dashboard/Tables/tables";

export const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/pagevisits")
      .then((res) => res.json())
      .then((data) => {
        setDashboardData(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex flex-row gap-4 h-32 justify-between w-full">
          <Card />
        </div>
        <Tables />
      </div>
    </>
  );
};
