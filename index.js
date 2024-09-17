const express = require('express')
const app = express()
const connect = require('./connection');
const student = require('./routes/student');
app.use(express.json());
app.use(student);
connect();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Example app listening on port ${port}`)
})