import { chromium } from "playwright"

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"

const pages = [
  "/",
  "/about",
  "/skills",
  "/projects",
  "/projects/healthcare-ai-system",
  "/terminal",
  "/contact",
]

const viewports = [
  { name: "iphone", width: 390, height: 844 },
  { name: "android", width: 412, height: 915 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1366, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "ultrawide", width: 1920, height: 1080 },
]

async function run() {
  const browser = await chromium.launch({ headless: true })
  const failures = []

  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
    })

    for (const path of pages) {
      await page.goto(`${baseUrl}${path}`, {
        waitUntil: "networkidle",
        timeout: 45000,
      })

      const result = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        bodyScrollWidth: document.body.scrollWidth,
      }))
      const overflow =
        Math.max(result.scrollWidth, result.bodyScrollWidth) - result.clientWidth

      console.log(`${viewport.name} ${path} overflow=${overflow}`)

      if (overflow > 2) {
        failures.push({ viewport: viewport.name, path, overflow, result })
      }
    }

    await page.close()
  }

  await browser.close()

  if (failures.length > 0) {
    console.error(JSON.stringify(failures, null, 2))
    process.exit(1)
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
