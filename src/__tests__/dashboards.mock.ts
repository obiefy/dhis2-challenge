import { Dashboard, DashboardItem } from "@/types";

export const dashboardsMock: Dashboard[] = [
  {
    id: "123",
    displayName: "First dashboard",
    starred: false,
  },
];

export const dashboardItemsMock: DashboardItem[] = [
  {
    id: "111",
    displayName: "First Item",
    type: "MAP",
  },
  {
    id: "222",
    displayName: "Second Item",
    type: "MAP",
  },
  {
    id: "333",
    displayName: "Thirds Item",
    type: "TEXT",
  },
];
