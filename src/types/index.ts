export type Dashboard = {
  id: string;
  displayName: string;
  starred: boolean;
  items?: DashboardItem[];
};

export type DashboardItem = {
  id: string;
  type: "VISUALIZATION" | "MAP" | "MESSAGES" | "TEXT";
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
