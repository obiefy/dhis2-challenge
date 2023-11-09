import { get } from "@/lib/api";
import { Dashboard } from "@/types";
import { useEffect, useState } from "react";

type DataShape = {
  loading: boolean,
  dashboards: Dashboard[],
  error: string,
}


export const useDashboard = (): DataShape => {
    const [dashboards, setDashboards] = useState<Dashboard[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const getDashboards = async () => {
      setLoading(true);
      const [data, error] = await get<Dashboard[]>("/dashboards.json");
      if(data) setDashboards(data);
      if(error) setError(error);
      setLoading(false);
    }
  
    useEffect(() => {
      getDashboards();
      console.log("OK");
    }, []);

    return {
      loading,
      dashboards,
      error,
    }
  }