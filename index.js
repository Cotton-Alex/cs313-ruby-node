const express = require('express')
const path = require('path')
const { Pool } = require('pg');
const funcContoller = require('./controllers/controller.js');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
const PORT = process.env.PORT || 5000

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  // .get('/postage', async (req, res) => {
app.get('/', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM entry');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/index', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});

app.get('/all2', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM entry');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/index', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});

app.get("/read", funcContoller.read);
app.get("/transcribe", funcContoller.getTranscribe);
app.post("/transcribe", funcContoller.postTranscribe);

app.listen(PORT, function() {
	console.log("Listening on " + PORT);
});