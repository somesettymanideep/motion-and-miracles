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

  /**
   * The Health Astrology page shows the ceremony photos as a carousel, so it
   * must carry all ten of them with a caption in both languages.
   */
  it("health astrology gallery holds the fifteen ceremony photos, captioned in both languages", () => {
    const health = SERVICES.find((s) => s.slug === "health-astrology");
    expect(health).toBeDefined();
    const gallery = health!.detail.gallery ?? [];
    expect(gallery).toHaveLength(15);
    for (const item of gallery) {
      expect(item.image.length, "gallery image").toBeGreaterThan(0);
      expect(item.alt.en.trim().length).toBeGreaterThan(0);
      expect(item.alt.te.trim().length).toBeGreaterThan(0);
    }
  });

  /** Any other service page with a gallery must be captioned the same way. */
  it("special homas gallery holds the twenty homa photos, captioned in both languages", () => {
    const homas = SERVICES.find((s) => s.slug === "special-homas");
    expect(homas).toBeDefined();
    const gallery = homas!.detail.gallery ?? [];
    expect(gallery).toHaveLength(20);
    for (const item of gallery) {
      expect(item.image.length, "gallery image").toBeGreaterThan(0);
      expect(item.alt.en.trim().length).toBeGreaterThan(0);
      expect(item.alt.te.trim().length).toBeGreaterThan(0);
    }
  });

  /** Any other service page with a gallery must be captioned the same way. */
  it("every gallery photo has an English and Telugu caption", () => {
    for (const s of SERVICES) {
      for (const item of s.detail.gallery ?? []) {
        expect(item.alt.en.trim().length, `${s.slug} gallery (en)`).toBeGreaterThan(0);
        expect(item.alt.te.trim().length, `${s.slug} gallery (te)`).toBeGreaterThan(0);
      }
    }
  });
});
