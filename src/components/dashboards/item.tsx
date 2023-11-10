import { DashboardItem } from "@/types";
import { Globe2, Mail, PieChart, Type } from "lucide-react";
import React from "react";

type PropsType = { item: DashboardItem };

export default function Item({ item }: PropsType) {
  const icons = {
    VISUALIZATION: Globe2,
    MAP: PieChart,
    TEXT: Type,
    MESSAGES: Mail,
  };

  return (
    <div className="px-4 py-4 flex border-b border-b-slate-200 hover:bg-slate-100 last:border-b-0">
      {React.createElement(icons[item.type], {
        size: 18,
        className: "mt-0.5 mr-2 text-slate-400",
      })}
      <p>{item.displayName}</p>
    </div>
  );
}
