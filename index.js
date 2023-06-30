const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const message = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Testing App</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f7f7f7;
      color: #333;
      text-align: center;
    }
    h1 {
      font-size: 48px;
    }
    .red {
      color: #ff0000;
    }
    .green {
      color: #00ff00;
    }
  </style>
</head>
<body style="background-color: #ccc;">
  <h1>Welcome to the <span class="Red">DevOps</span> <span class="Green">World</span> !!</h1>
</body>
</html>
  `;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

