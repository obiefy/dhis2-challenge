import { Accordion } from "@/components/ui/accordion";
import DashboardHeader from "./header";
import { useDashboard } from "@/hooks/dashboard";
import Loading from "./loading";
import { useEffect } from "react";

export default function DashboardList() {
  const { loading, dashboards, error, getDashboards } = useDashboard();
  useEffect(() => {
    getDashboards();
  }, []);
  return (
    <div className="">
      {error && <div className="text-red-500">{error}</div>}
      {loading && <Loading />}
      {dashboards.length > 0 && (
        <Accordion
          type="single"
          defaultValue={dashboards[0].id}
          collapsible
          className="w-full"
        >
          {dashboards.map((dashboard) => (
            <DashboardHeader
              key={dashboard.id}
              isActive={dashboard.id === dashboards[0].id}
              dashboard={dashboard}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
}
