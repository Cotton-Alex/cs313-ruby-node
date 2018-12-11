const { Pool } = require('pg');
const db_url = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: db_url, ssl: true });


function getByImageNameRead(image_file_name, callback) {

    var sql = "SELECT entry.entry_date, entry.entry_text FROM entry WHERE image_id = 2;";
    pool.query(sql, function(err, db_results) {

        if (err) {
            throw err;
        } else {
            //success from database
            console.log("back from db with:");
            console.log(db_results);

            var results = {
                success: true,
                list: db_results.rows
            };

            callback(null, results);
        }

    });


}

function getByImageNameTran(image_file_name, callback) {

    var results = {
        list: [{ date: image_file_name, entry: "today stuff happened" },
            { date: image_file_name, entry: "today 2 stuff happened" },
            { date: image_file_name, entry: "today 3 stuff happened" },
            { date: image_file_name, entry: "today 4 stuff happened" },
            { date: image_file_name, entry: "today 5 stuff happened" }
        ]
    };

    callback(null, results);
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