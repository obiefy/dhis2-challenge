import { DashboardItem } from "@/types";

type PropsType = { item: DashboardItem };

export default function Item({ item }: PropsType) {
  return <div>Hello {item.id}</div>;
}
