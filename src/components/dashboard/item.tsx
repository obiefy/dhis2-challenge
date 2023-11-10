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
    <div className="flex px-4 py-4 bg-slate-100 rounded-md border border-slate-100 hover:border-slate-200 hover:shadow">
      <div className="w-[28px]">
        {React.createElement(icons[item.type], {
          size: 18,
          className: "mt-0.5 mr-2 text-slate-400",
        })}
      </div>
      <p>{item.displayName}</p>
    </div>
  );
}
