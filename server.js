// server.js
const app = require('./app');

const port = 1999;

// Only start server if run directly (not during tests)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
  });
}
