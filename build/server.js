const express = require('express'),
  dbOperation = require('./dbFiles/dbOperation'),
  cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

//defining some variables
let client;
let session;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.urlencoded());
app.use(cors());

app.post('/*', async (req, res) => {
  console.log('SQL Query Called');
  console.log(req.body.name);    
  const result = await dbOperation.getClaims(req.body.name);
  res.send(result.recordset);
  //res.send(result);
  
  //console.log(result.recordset);
  console.log('  After Query executed');
});

app.post('/*', function (req, res) {
  console.log('Called Quit');
  res.send({ result: 'Good Bye' });
});


// dbOperation.getClaims().then((res) => {
//   console.log(res.recordset);
// });

app.listen(API_PORT, () => console.log("Listning on port " + API_PORT));
