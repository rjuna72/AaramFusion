import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

const routes = ["/", "/menu/", "/visit/"];
for (const width of [320, 390, 768, 1440]) {
  for (const route of routes) {
    test(`${route} at ${width}px: accessible, no overflow, assets load`, async ({ page }) => {
      await page.setViewportSize({ width, height: 960 });
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("h1")).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await expect(img).toHaveJSProperty("complete", true);
        expect(await img.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      }
      const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(accessibility.violations).toEqual([]);
      expect(errors).toEqual([]);
      if (width === 390 || width === 1440) {
        await mkdir("qa", { recursive: true });
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: `qa/${route.replaceAll("/", "") || "home"}-${width}.jpg`, fullPage: true, type: "jpeg", quality: 80 });
      }
    });
  }
}
test("mobile navigation, keyboard dismissal, category anchors and FAQ", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: /Explore/ });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Menu", exact: true }).click();
  await expect(page).toHaveURL(/\/menu\/$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await page.getByRole("navigation", { name: "Menu categories" }).getByRole("link", { name: /Coffee/ }).click();
  await expect(page).toHaveURL(/#coffee$/);
  await expect(page.locator("#coffee")).toBeInViewport();
  await page.goto("/visit/");
  await page.locator("summary").filter({ hasText: "Can I order online?" }).click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await expect(page.locator("details").first().getByRole("link")).toHaveAttribute("href", /ubereats\.com/);
  await expect(page.getByRole("link", { name: "Directions on Google Maps" })).toHaveAttribute("href", /destination=664%20Miles/);
});
test("skip link, reduced motion, enlarged text and 404 recovery", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1280, height: 960 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
  await page.addStyleTag({ content: "body { zoom: 2; }" });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const response = await page.goto("/missing-page/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("link", { name: "Explore the menu" })).toBeVisible();
});
