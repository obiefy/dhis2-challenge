import { get } from "@/lib/api";
import { Dashboard, DashboardItem } from "@/types";
import { Item } from "@radix-ui/react-accordion";
import { useEffect, useState } from "react";

type DashboardDataShape = {
  loading: boolean,
  dashboards: Dashboard[],
  error: string,
  getDashboards: () => Promise<void>
  bookmark: (dashboard: Dashboard) => Dashboard
}

type DashboardItemDataShape = {
  loading: boolean,
  items: DashboardItem[],
  error: string,
  getItems: () => Promise<void>
}

const withBookmarked = (dashboards: Dashboard[]): Dashboard[] => {
  return dashboards.map((dashboard) => {
    const cachedItem = localStorage.getItem(dashboard.id);
    if(cachedItem) {
      return {...dashboard, starred: true};
    }
    return {...dashboard, starred: false};
  });
}

const bookmark = (dashboard: Dashboard): Dashboard => {
  if(!dashboard.starred) {
    localStorage.setItem(dashboard.id, dashboard.displayName);
    return {...dashboard, starred: true};
  }

  localStorage.removeItem(dashboard.id);
  return {...dashboard, starred: false};
}

export const useDashboard = (): DashboardDataShape => {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getDashboards = async () => {
    setLoading(true);
    const [data, error] = await get<{dashboards: Dashboard[]}>("/dashboards.json");
    if(data) setDashboards(withBookmarked(data.dashboards))
    if(error) setError(error);
    setLoading(false);
  }

  useEffect(() => {
    getDashboards();
  }, []);

  return {
    loading,
    dashboards,
    error,
    getDashboards,
    bookmark,
  }
}

export const useDashboardItems = (dashboard: Dashboard): DashboardItemDataShape => {
  const [items, setItems] = useState<DashboardItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getItems = async () => {
    setLoading(true);
    const [data, error] = await get<{dashboardItems: DashboardItem[]}>(`/${dashboard.id}.json`);
    console.log(error, data)
    if(data) setItems(data.dashboardItems)
    if(error) setError(error);
    setLoading(false);
  }

  return {
    loading,
    items,
    error,
    getItems
  }
}
