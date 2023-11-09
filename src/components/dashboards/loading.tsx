import { Skeleton } from "../ui/skeleton";

export default function Loading() {
  return (
    <div>
      <Skeleton className="w-full h-12 mt-4" />
      <Skeleton className="w-full h-12 mt-4" />
      <Skeleton className="w-full h-12 mt-4" />
    </div>
  );
}