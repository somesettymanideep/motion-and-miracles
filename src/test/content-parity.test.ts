import { describe, expect, it } from "vitest";
import { dict } from "@/data/site";
import { SERVICES } from "@/data/services";

type Nested = Record<string, unknown>;

function shapeOf(obj: Nested, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return shapeOf(value as Nested, path);
    }
    return [path];
  });
}

/** The Telugu dictionary must always mirror the English dictionary's shape. */
describe("i18n dictionary parity", () => {
  it("te has exactly the same keys as en", () => {
    expect(shapeOf(dict.te as unknown as Nested).sort()).toEqual(
      shapeOf(dict.en as unknown as Nested).sort()
    );
  });

  it("every Telugu string is non-empty", () => {
    const check = (obj: Nested, path: string[]) => {
      for (const [key, value] of Object.entries(obj)) {
        if (value && typeof value === "object" && !Array.isArray(value)) {
          check(value as Nested, [...path, key]);
        } else if (typeof value === "string") {
          expect(value.trim().length, [...path, key].join(".")).toBeGreaterThan(0);
        }
      }
    };
    check(dict.te as unknown as Nested, []);
  });
});

/** Every service must be reachable by its slug and carry its own SEO meta. */
describe("services data", () => {
  it("has 11 services with unique slugs and SEO titles", () => {
    expect(SERVICES).toHaveLength(11);
    const slugs = new Set(SERVICES.map((s) => s.slug));
    expect(slugs.size).toBe(11);
    for (const s of SERVICES) {
      expect(s.detail.seo.title.length).toBeGreaterThan(0);
      expect(s.detail.seo.description.length).toBeGreaterThan(0);
    }
  });

  /**
   * A service detail page must open with at least five lines of intro copy in
   * the language being read (the intro column fits ~80 Latin / ~60 Telugu
   * characters per line), so no service page opens with a stub paragraph.
   */
  it("every service intro carries at least five lines of copy in both languages", () => {
    for (const s of SERVICES) {
      expect(s.detail.intro.en.length, `${s.slug} intro (en)`).toBeGreaterThanOrEqual(400);
      expect(s.detail.intro.te.length, `${s.slug} intro (te)`).toBeGreaterThanOrEqual(300);
    }
  });
});
