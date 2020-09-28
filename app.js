const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.argv[2] || 8080;

// Serving React App
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', ()=>{
  console.log(`Listening on ${PORT}`);
});