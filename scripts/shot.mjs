import { chromium } from "playwright";

const URL = process.env.SHOT_URL || "http://localhost:3000";
const browser = await chromium.launch();

async function shoot(name, viewport, fullPage) {
  const ctx = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
  await page.goto(URL, { waitUntil: "domcontentloaded" });

  // Wait for hero entrance animations (delays up to ~1.7s) to settle.
  await page.waitForTimeout(2600);

  // Scroll through to trigger in-view reveal animations, then back to top.
  if (fullPage) {
    const h = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < h; y += Math.round(viewport.height * 0.7)) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(350);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
  }

  await page.screenshot({
    path: `/tmp/${name}.png`,
    fullPage,
    animations: "disabled",
    timeout: 60000,
  });
  await ctx.close();
  console.log(`${name}: saved (console errors: ${errors.length})`);
  errors.slice(0, 8).forEach((e) => console.log("  ⚠", e));
}

await shoot("desktop-top", { width: 1440, height: 900 }, false);
await shoot("desktop-full", { width: 1440, height: 900 }, true);
await shoot("mobile-top", { width: 390, height: 844 }, false);
await shoot("mobile-full", { width: 390, height: 844 }, true);

await browser.close();
