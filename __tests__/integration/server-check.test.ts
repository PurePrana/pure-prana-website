// This test runs without puppeteer, so it won't auto-start the server
import http from 'http'

describe('Server Running Check - Manual', () => {
  it('should confirm server is running on port 3000', async () => {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/',
        method: 'GET',
        timeout: 5000
      }

      const req = http.request(options, (res) => {
        if (res.statusCode === 200) {
          console.log('✓ Server is running on port 3000')
          resolve(true)
        } else {
          reject(new Error(`Server returned status ${res.statusCode}`))
        }
      })

      req.on('error', (error) => {
        console.error('✗ Server is not running on port 3000')
        reject(new Error('Server is not running. Please start the server with "npm run dev"'))
      })

      req.on('timeout', () => {
        req.destroy()
        reject(new Error('Connection timeout - server might not be running'))
      })

      req.end()
    })
  })
})