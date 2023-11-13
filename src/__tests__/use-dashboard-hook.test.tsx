import { expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { dashboardItemsMock, dashboardsMock } from "./dashboards.mock";
import { useDashboard, useDashboardItems } from "@/hooks/dashboard";

test("fetches dashboards data from the api", async () => {
  // @ts-expect-error TODO: fix typing issue
  fetch.mockResponseOnce(
    JSON.stringify({
      dashboards: dashboardsMock,
    }),
  );
  const { result } = renderHook(() => {
    return useDashboard();
  });
  await result.current.getDashboards();
  await waitFor(async () => {
    expect(result.current.dashboards).toHaveLength(1);
  });

  expect(result.current.dashboards[0].id).toBe("123");
});

test("gets dashboard items ", async () => {
  // @ts-expect-error TODO: fix typing issue
  fetch.mockResponseOnce(
    JSON.stringify({
      dashboardItems: dashboardItemsMock,
    }),
  );
  const { result } = renderHook(() => {
    return useDashboardItems(dashboardsMock[0]);
  });
  await result.current.getItems();
  await waitFor(async () => {
    expect(result.current.items).toHaveLength(3);
  });
  expect(result.current.items[0].id).toBe("111");
});
