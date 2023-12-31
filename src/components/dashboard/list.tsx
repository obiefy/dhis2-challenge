import { Accordion } from "@/components/ui/accordion";
import DashboardHeader from "./header";
import { useDashboard } from "@/hooks/dashboard";
import Loading from "./loading";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../ui/dropdown-menu";
import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import { FILTERS } from "@/constants";
import { DashboardType } from "@/types";

export default function DashboardList() {
  const [filter, setFilter] = useState<DashboardType | undefined>();
  const { loading, dashboards, error, getDashboards } = useDashboard();
  const handleFilterChange = (newFilter: string) => {
    if (newFilter === filter) {
      setFilter(undefined);
      return;
    }

    setFilter(newFilter as DashboardType);
  };

  useEffect(() => {
    getDashboards();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between mb-6">
        <h1 className="text-lg font-medium">Dashboards</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-xs">
              <Filter size={16} className="mr-2" />
              Filter By {filter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuRadioGroup
              value={filter}
              onValueChange={handleFilterChange}
            >
              {FILTERS.map((item) => (
                <DropdownMenuRadioItem key={item} value={item}>
                  {item}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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
              filter={filter}
              onResetFilter={() => setFilter(undefined)}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
}
