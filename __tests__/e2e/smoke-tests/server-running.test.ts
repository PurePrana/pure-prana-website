describe('Server Running Check', () => {
  it('should confirm server is running on port 3000', async () => {
    try {
      const response = await fetch('http://localhost:3000')
      expect(response.status).toBe(200)
      console.log('✓ Server is running on port 3000')
    } catch (error) {
      console.error('✗ Server is not running on port 3000')
      throw new Error('Server is not running. Please start the server with "npm run dev"')
    }
  })
})