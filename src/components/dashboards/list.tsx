import { Accordion } from "@/components/ui/accordion"
import DashboardHeader from "./header";
import { useDashboard } from "@/hooks/dashboard";
import Loading from "./loading";

export default function DashboardList() {
  const {loading, dashboards, error} = useDashboard();
  return (
    <div className="">
      {error && <div className="text-red-500">{error}</div>}
      {loading && <Loading />}
      <Accordion type="single" collapsible className="w-full">
        {dashboards.map((dashboard) => <DashboardHeader key={dashboard.id} dashboard={dashboard}/>)}
      </Accordion>
    </div>

  );
}