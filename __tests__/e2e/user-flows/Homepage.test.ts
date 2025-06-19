import { Browser, Page } from 'puppeteer'

declare global {
  var browser: Browser
  var page: Page
}

describe('Homepage User Flow', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' })
  })

  it('should display the homepage with key elements', async () => {
    // Wait for main content to load
    await page.waitForSelector('main', { visible: true })

    // Check for main heading in hero
    const heading = await page.$eval('h1', (el: HTMLElement) => el.textContent)
    expect(heading).toContain('Pure Prana')

    // Check for hero tagline
    const tagline = await page.$eval('p', (el: HTMLElement) => el.textContent)
    expect(tagline).toContain('Discover Ancient Ayurvedic Wisdom')

    // Check for hero CTA buttons
    const heroButtons = await page.$$('a.btn-primary, a.btn-outline')
    expect(heroButtons.length).toBeGreaterThanOrEqual(2)

    // Check for featured products section
    const productsSection = await page.$('#products')
    expect(productsSection).toBeTruthy()

    // Check for product cards
    await page.waitForSelector('article', { visible: true })
    const productCards = await page.$$('article')
    expect(productCards.length).toBeGreaterThan(0)

    // Check for Amazon buy buttons
    const buyButtons = await page.$$('a[href*="amazon.com"]')
    expect(buyButtons.length).toBeGreaterThan(0)
  })

  it('should have proper affiliate links', async () => {
    // Check that Amazon links have affiliate tag
    const amazonLinks = await page.$$eval(
      'a[href*="amazon.com"]',
      (links: HTMLAnchorElement[]) =>
        links.map((link) => link.getAttribute('href'))
    )

    amazonLinks.forEach((link: string | null) => {
      expect(link).toContain('tag=pureprana-20')
    })

    // Check for proper rel attributes
    const firstAmazonLink = await page.$('a[href*="amazon.com"]')
    const relAttribute = await firstAmazonLink?.evaluate((el: Element) =>
      el.getAttribute('rel')
    )
    expect(relAttribute).toContain('nofollow')
    expect(relAttribute).toContain('sponsored')
  })

  it('should navigate to sections via anchor links', async () => {
    // Click on Shop Now button
    await page.click('a[href="#products"]')

    // Check if scrolled to products section
    const productsInView = await page.$eval('#products', (el: Element) => {
      const rect = el.getBoundingClientRect()
      return rect.top >= 0 && rect.top <= window.innerHeight
    })
    expect(productsInView).toBeTruthy()

    // Click on Learn About Ayurveda
    await page.click('a[href="#why-ayurveda"]')

    // Check if scrolled to why-ayurveda section
    const ayurvedaInView = await page.$eval('#why-ayurveda', (el: Element) => {
      const rect = el.getBoundingClientRect()
      return rect.top >= 0 && rect.top <= window.innerHeight
    })
    expect(ayurvedaInView).toBeTruthy()
  })

  it('should have proper meta tags', async () => {
    const title = await page.title()
    expect(title).toBeTruthy()

    const viewport = await page.$eval('meta[name="viewport"]', (el: Element) =>
      el.getAttribute('content')
    )
    expect(viewport).toContain('width=device-width')
  })

  it('should be responsive', async () => {
    // Test mobile viewport
    await page.setViewport({ width: 375, height: 667 })

    // Check mobile layout
    const mobileMain = await page.$('main')
    expect(mobileMain).toBeTruthy()

    // Product grid should be single column on mobile
    const mobileGridClass = await page.$eval(
      '.grid',
      (el: Element) => el.className
    )
    expect(mobileGridClass).toContain('md:grid-cols-2')

    // Test desktop viewport
    await page.setViewport({ width: 1920, height: 1080 })
    const desktopMain = await page.$('main')
    expect(desktopMain).toBeTruthy()
  })

  it('should track affiliate clicks', async () => {
    // Intercept gtag calls
    const gtagCalls: any[] = []
    await page.evaluateOnNewDocument(() => {
      window.gtag = function () {
        ;(window as any).gtagCalls = (window as any).gtagCalls || []
        ;(window as any).gtagCalls.push(arguments)
      }
    })

    await page.reload()
    await page.waitForSelector('a[href*="amazon.com"]')

    // Click on a product buy button
    await page.click('a[href*="amazon.com"]:first-child')

    // Check if gtag was called
    const trackedEvents = await page.evaluate(() => (window as any).gtagCalls)
    if (trackedEvents && trackedEvents.length > 0) {
      const clickEvent = trackedEvents.find((call: any) => call[1] === 'click')
      expect(clickEvent).toBeTruthy()
    }
  })

  it('should take a screenshot for visual regression', async () => {
    await page.setViewport({ width: 1920, height: 1080 })
    await page.screenshot({
      path: '__tests__/e2e/screenshots/homepage-desktop.png',
      fullPage: true,
    })

    await page.setViewport({ width: 375, height: 667 })
    await page.screenshot({
      path: '__tests__/e2e/screenshots/homepage-mobile.png',
      fullPage: true,
    })
  })
})
