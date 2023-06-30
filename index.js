const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const message = `
    <html>
      <head>
        <title>Testing App</title>
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
      <body>
        <h1>Welcome to the <span class="DevOps">Red</span> and <span class="World">Green</span> Hello App!</h1>
      </body>
    </html>
  `;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
