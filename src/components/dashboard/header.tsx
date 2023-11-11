import { Dashboard } from "@/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { useDashboard, useDashboardItems } from "@/hooks/dashboard";
import Item from "./item";
import { Skeleton } from "../ui/skeleton";

type PropsType = { dashboard: Dashboard; isActive?: boolean };

export default function DashboardHeader({
  dashboard: dashboardParam,
  isActive,
}: PropsType) {
  const [dashboard, setDashboard] = useState(dashboardParam);
  const [loaded, setLoaded] = useState(false);
  const { bookmark } = useDashboard();
  const { loading, items, getItems } = useDashboardItems(dashboard);

  const onBookmark = () => {
    setDashboard(bookmark(dashboard));
  };

  const onLoadItems = async () => {
    if (loaded) return;
    await getItems();
    setLoaded(true);
  };

  useEffect(() => {
    if (isActive) {
      onLoadItems();
    }
  }, []);

  return (
    <AccordionItem
      value={dashboard.id}
      className="mb-4 border border-slate-200 rounded-md shadow-md shadow-slate-100 hover:bg-slate-50 text-slate-700"
    >
      <AccordionTrigger className="px-4" onClick={onLoadItems}>
        <div className="flex">
          <Bookmark
            className={`mt-0.5 mr-2 text-slate-400 ${
              dashboard.starred ? "fill-slate-400" : ""
            }`}
            size={18}
            onClick={onBookmark}
          />
          {dashboard.displayName}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-0">
        {loading && (
          <div className="m-4 grid md:grid-cols-2 gap-2">
            <Skeleton className="w-full h-12 bg-slate-100" />
            <Skeleton className="w-full h-12 bg-slate-100" />
          </div>
        )}
        {!loading && (
          <div className="m-4 grid md:grid-cols-2 gap-2">
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
