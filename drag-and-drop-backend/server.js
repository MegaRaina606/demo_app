// server.js
// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/check-order', (req, res) => {

  // Set the CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const selectedIconIds = req.body.selectedIconIds;
  const correctOrder = [1, 2, 3, 4]; // Define the correct order of the icons here

  // Check if the selected icons are in the correct order
  const isCorrect = arraysEqual(selectedIconIds, correctOrder);

  res.json({ isCorrect });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// Helper function to compare two arrays
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
