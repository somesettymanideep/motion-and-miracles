import { Outlet } from "@tanstack/react-router";

/**
 * Layout for /services and /services/$slug. The flat route
 * `services.$slug` nests beneath this route, so it must render
 * <Outlet />; the listing itself lives in services.index.tsx.
 */
export const Route = createFileRoute("/services")({
  component: () => <Outlet />,
});
