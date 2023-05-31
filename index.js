const express = require('express')
const cors = require('cors')
const path = require('path')
var cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 5001

const app = express();
app.use(express.json());
app.use(cookieParser())
// app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
      return res.status(200).json({});
  }

  next();
});

app.post('/graphql', (req, res) => {
  const accToken = req?.cookies?.accToken ?? 'asdasdasdas'; // Read the "accToken" cookie
  console.log(accToken)
  console.log(req?.cookies)

  // Handle the account POST request
  // ...

  res.status(200).send({"data": {}});
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});

// var app = express()

//

// app.use(express.static(path.join(__dirname, 'public')))
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
// app.get('/', (req, res) => res.render('pages/index'))
// app.post('/graphql', cors(corsOptions), (req, res) => {
//     console.log(req.cookies)
//     // const accToken = req.cookies?.accToken; // Read the "accToken" cookie
  
//     // Handle the account POST request
//     // ...
  
//     res.send('Account request received');
//   })
// app.listen(PORT, () => console.log(`Listening on ${ PORT } yeah`))
