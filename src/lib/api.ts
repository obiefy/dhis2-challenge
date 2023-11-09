import { ApiResponse } from "@/types";


export const get = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`);
    const { dashboards } = await response.json();
    return [dashboards, null];
  } catch (error:unknown) {
    console.log("API ERROR => ", error);
    let message = '';
    if (typeof error === 'string') {
      message = error;
    } else if (error instanceof Error) {
      message = error.message;
    } else {
      console.log("UNREACHABLE ERROR => ", error);
    }
    return [null, message];
  }
}