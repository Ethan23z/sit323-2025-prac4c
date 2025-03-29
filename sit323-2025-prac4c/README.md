## Overview
This microservice enhances a basic calculator API by adding advanced arithmetic operations:
- Exponentiation
- Square Root
- Modulo

Built with Node.js and Express.

## Setup Instructions

### 1. Clone the repository
```
git clone https://github.com/your-username/sit323-2025-prac4c.git
cd sit323-2025-prac4c
```

### 2. Install dependencies
```
npm install express
```

### 3. Run the service
```
node index.js
```

The service will start at: `http://localhost:3000`

## API Endpoints

### 1. Exponentiation
**GET** `/power?base=2&exponent=3`
- Example Response: `{ "result": 8 }`

### 2. Square Root
**GET** `/sqrt?number=9`
- Example Response: `{ "result": 3 }`

### 3. Modulo
**GET** `/modulo?dividend=10&divisor=3`
- Example Response: `{ "result": 1 }`

## Error Handling
- Invalid or missing parameters return 400 with an error message
- Division by zero is caught in modulo endpoint


