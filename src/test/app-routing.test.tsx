import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const makeRouter = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches a page for / instead of falling back to not found", () => {
    const router = makeRouter();

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the sign-in page and the gated admin dashboard", () => {
    const router = makeRouter();

    expect(router.matchRoutes("/auth").at(-1)?.routeId).toBe("/auth");
    expect(router.matchRoutes("/admin").at(-1)?.routeId).toBe("/_authenticated/admin");
  });
});
