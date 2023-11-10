import { Dashboard } from "@/types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bookmark } from "lucide-react";
import { useState } from "react";

type PropsType = { dashboard: Dashboard };

export default function DashboardHeader({ dashboard: dashboardParam }: PropsType) {
  const [dashboard, setDashboard] = useState(dashboardParam);

  const bookmark = () => {
    if(!dashboard.starred) {
      localStorage.setItem(dashboard.id, JSON.stringify(dashboard));
      setDashboard({...dashboard, starred: true});
      return;
    }

    localStorage.removeItem(dashboard.id);
    setDashboard({...dashboard, starred: false});
  }

  return (
    <AccordionItem value={dashboard.id} className="mb-4 px-4 border border-slate-200 rounded-md shadow-md shadow-slate-100 hover:bg-slate-50 text-slate-700">
      <AccordionTrigger>
        <div className="flex">
          <Bookmark className={`mt-0.5 mr-2 text-slate-400 ${dashboard.starred ? 'fill-slate-400' : '' }`} size={18} onClick={() => bookmark() }/>
          {dashboard.displayName}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="">
          HELLO WORLD
        </div>
      </AccordionContent>
    </AccordionItem>
  );
} 