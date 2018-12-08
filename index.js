const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const { Pool } = require('pg')
const contoller = require('./controllers/controller.js')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
const PORT = process.env.PORT || 5000

var session = require('express-session');
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
      const result = await client.query('SELECT entry.entry_date, entry.entry_text FROM entry WHERE image_id = 2;');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/index', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});

app.get('/page', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM entry");
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/index', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});

app.get("/read", contoller.read);
app.get("/transcribe", contoller.getTranscribe);
app.post("/transcribe", contoller.postTranscribe);

app.listen(PORT, function() {
	console.log("Listening on " + PORT);
});