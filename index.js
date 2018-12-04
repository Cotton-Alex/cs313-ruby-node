const express = require('express')
const path = require('path')
const { Pool } = require('pg');
const contoller = require('./controllers/controller.js');
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

app.get('/page', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('journal.journal_id,
                                              journal.journal_name,
                                              image.image_name,
      										entry.entry_id,
                                              entry.page_date, 
                                              entry.image_id, 
                                              entry.entry_date, 
                                              entry.entry_text
                                              FROM entry
                                              INNER JOIN image
                                              ON entry.image_id = image.image_id
                                              INNER JOIN journal
                                              ON entry.journal_id = journal.journal_id
                                              WHERE image.image_name = 1946-1950-01-07.jpg');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/index', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});

app.get("/read", contoller.cRead);
app.get("/transcribe", contoller.cGetTranscribe);
app.post("/transcribe", contoller.cPostTranscribe);

app.listen(PORT, function() {
	console.log("Listening on " + PORT);
});