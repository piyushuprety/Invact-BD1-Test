const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Welcome to the Stock portfolio analysis API!');
});

app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = req.query.quantity;

  const returns = String(marketPrice - boughtAt) * quantity;
  res.send(`${returns}`);
});

app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  const returns = String(stock1 + stock2 + stock3 + stock4);
  res.send(`${returns}`);
});

app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  const percentage = String(returns / boughtAt) * 100;
  res.send(`${percentage}`);
});

app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  const percentage = String(stock1 + stock2 + stock3 + stock4);
  res.send(`${percentage}`);
});

app.get('/status', (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);
  if (returnPercentage > 0) {
    res.send(`profit`);
  } else {
    res.send(`loss`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
