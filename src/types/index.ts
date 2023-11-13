import type { FILTERS } from "@/constants";

export type Dashboard = {
  id: string;
  displayName: string;
  starred: boolean;
  items?: DashboardItem[];
};

export type DashboardType = (typeof FILTERS)[number];

export type DashboardItem = {
  id: string;
  type: DashboardType;
  displayName: string;
  visualization?: {
    name: string;
  };
  map?: {
    name: string;
  };
  text?: string;
};

export type ApiResponse<T> = [null | T, null | string];
