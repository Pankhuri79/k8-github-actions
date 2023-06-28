const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const message = `
    <html>
      <head>
        <title>Fancy Hello</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            color: #333;
            text-align: center;
          }
          h1 {
            font-size: 48px;
            color: #ff8c00;
            margin-top: 100px;
          }
          p {
            font-size: 24px;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the Fancy Hello App!</h1>
        <p>╭━━━╮╱╱╱╱╭╮╱╭┳╮╱╭╮</p>
        <p>╰╮╭╮┣╮╭┳╮╱┃┃╱┃┃┃╱┃┃</p>
        <p>╱┃┃┃┃┃┃┃┃╱┃┃╱┃┃┃╱┃┃</p>
        <p>╱┃┃┃┃┃┃┃┃╱┃┃╱┃┃┃╱┃┃</p>
        <p>╭╯╰╯┃╰╯┃╰╮┃╰┳╯┃╰┳╯</p>
        <p>╰━━━┻━━┻━╯╰━┻━┻━╯</p>
      </body>
    </html>
  `;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
