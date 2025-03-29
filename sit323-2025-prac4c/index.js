const express = require('express');
const app = express();
const port = 3000;

// Power endpoint
app.get('/power', (req, res) => {
    const base = parseFloat(req.query.base);
    const exponent = parseFloat(req.query.exponent);
    if (isNaN(base) || isNaN(exponent)) {
        return res.status(400).json({ error: 'Invalid base or exponent' });
    }
    const result = Math.pow(base, exponent);
    res.json({ result });
});

// Square root endpoint
app.get('/sqrt', (req, res) => {
    const number = parseFloat(req.query.number);
    if (isNaN(number) || number < 0) {
        return res.status(400).json({ error: 'Invalid or negative number' });
    }
    const result = Math.sqrt(number);
    res.json({ result });
});

// Modulo endpoint
app.get('/modulo', (req, res) => {
    const dividend = parseFloat(req.query.dividend);
    const divisor = parseFloat(req.query.divisor);
    if (isNaN(dividend) || isNaN(divisor) || divisor === 0) {
        return res.status(400).json({ error: 'Invalid dividend or divisor' });
    }
    const result = dividend % divisor;
    res.json({ result });
});

// Root route
app.get('/', (req, res) => {
    res.send('Calculator Microservice with Advanced Operations');
});

app.listen(port, () => {
    console.log(`Calculator microservice listening at http://localhost:${port}`);
});
