const express = require('express');
const client = require('prom-client'); // Prometheus client

const app = express();
const PORT = 3001;

// Create a Registry to register the metrics
const register = new client.Registry();

// Optional: Collect default metrics like CPU, memory, etc.
client.collectDefaultMetrics({ register });

// Custom metric example
const httpRequestsCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests received',
});
register.registerMetric(httpRequestsCounter);

// Route: /
app.get('/', (req, res) => {
  httpRequestsCounter.inc();
  res.send('✅ Backend is running on /');
});

// Route: /api
app.get('/api', (req, res) => {
  httpRequestsCounter.inc();
  res.send('📦 Backend API running');
});

// Route: /metrics (used by Prometheus)
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
