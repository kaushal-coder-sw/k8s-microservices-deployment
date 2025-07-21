const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => res.send('📦 Backend API running'));

// Add this route to handle GET /
app.get('/', (req, res) => res.send('✅ Backend is running on /'));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));