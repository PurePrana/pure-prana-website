module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: process.env.SLOWMO ? parseInt(process.env.SLOWMO) : 0,
    devtools: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  server: {
    command: 'npm run dev',
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
}
