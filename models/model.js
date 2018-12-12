const { Pool } = require('pg');
const db_url = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: db_url, ssl: true });


function getByImageNameRead(image_file_name, callback) {

    var sql = "SELECT journal.journal_name, image.image_name, entry.page_date, entry.image_id, \n" +
     "entry.entry_date, entry.entry_text FROM entry INNER JOIN image ON entry.image_id = image.image_id \n" +
     " INNER JOIN journal ON entry.journal_id = journal.journal_id \n" + 
     "WHERE image.image_name = " + "'" + image_file_name + "'" + " ORDER BY entry_date ASC;";
    
    pool.query(sql, function(err, db_results) {

        if (err) {
            throw err;
        } else {

            var results = {
                success: true,
                list: db_results.rows
            };

            callback(null, results);
        }

    });


}

function getByImageNameTran(image_file_name, callback) {

    var sql = "SELECT journal.journal_name, image.image_name, entry.page_date, entry.image_id, \n" +
     "entry.entry_date, entry.entry_text FROM entry INNER JOIN image ON entry.image_id = image.image_id \n" +
     " INNER JOIN journal ON entry.journal_id = journal.journal_id \n" + 
     "WHERE image.image_name = " + "'" + image_file_name + "'" + " ORDER BY entry_date ASC;";
    
    pool.query(sql, function(err, db_results) {

        if (err) {
            throw err;
        } else {

            var results = {
                success: true,
                list: db_results.rows
            };

            callback(null, results);
        }

    });
}

function insertEntry(entry_date, entry_text, callback) {

    var results = { date: entry_date, entry: entry_text };
    callback(null, results);
}

module.exports = {
    getByImageNameRead: getByImageNameRead,
    getByImageNameTran: getByImageNameTran,
    insertEntry: insertEntry
};