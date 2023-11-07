import { Dashboard } from "@/types/dashboard";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type PropsType = { dashboard: Dashboard };

export default function DashboardHeader({ dashboard }: PropsType) {
  return (
    <AccordionItem value={dashboard.id}>
      <AccordionTrigger>{dashboard.displayName}</AccordionTrigger>
      <AccordionContent>
        NO CONTENT YET
      </AccordionContent>
    </AccordionItem>
  );
} 