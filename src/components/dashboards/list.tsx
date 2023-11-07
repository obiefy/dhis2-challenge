import { useState } from "react";
import { Accordion } from "@/components/ui/accordion"
import { Dashboard } from "@/types/dashboard";
import DashboardHeader from "./header";

export default function DashboardList() {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  return (
    <Accordion type="single" collapsible className="w-full">
      {dashboards.map((dashboard) => <DashboardHeader key={dashboard.id} dashboard={dashboard}/>)}
    </Accordion>
  );
}