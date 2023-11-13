import DashboardList from "./components/dashboard/list";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <div className="p-4 md:p-12">
      <DashboardList />
      <Toaster />
    </div>
  );
}
