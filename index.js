const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/account', (req, res) => {
  const accToken = req.cookies.accToken; // Read the "accToken" cookie

  // Handle the account POST request
  // ...

  res.send('Account request received');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
