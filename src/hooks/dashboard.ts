import { get } from "@/lib/api";
import { Dashboard } from "@/types";
import { Item } from "@radix-ui/react-accordion";
import { useEffect, useState } from "react";

type DataShape = {
  loading: boolean,
  dashboards: Dashboard[],
  error: string,
}

const syncWithLocalStorage = (dashboards: Dashboard[]): Dashboard[] => {
  return dashboards.map((dashboard) => {
    const cachedItem = localStorage.getItem(dashboard.id);
    if(!cachedItem) {
      return {...dashboard, starred: false};
    }
    const cachedDashboard = JSON.parse(cachedItem) as Dashboard;

    return {
      ...dashboard,
      starred: true,
      items: cachedDashboard.items
    }
  });
}

export const useDashboard = (): DataShape => {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getDashboards = async () => {
    setLoading(true);
    const [data, error] = await get<Dashboard[]>("/dashboards.json");
    if(data) setDashboards(syncWithLocalStorage(data))
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
  }
}
