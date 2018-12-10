const model = require("../models/model.js");

function read(req, res) {
    console.log("controller.read() called");
    var journal_name = "1946-1950";
    var journal_month = "01";
    var journal_day = "07";
    var image_file_name = (journal_name + "-" + journal_month + "-" + journal_day + ".jpg")
    console.log("image_file_name = " + image_file_name);

    model.displayRead(); // hide transcribe div, show read div
    document.getElementById('section_read').style.display = 'block';
    document.getElementById('section_transcribe').style.display = 'none';
    model.getByImageNameRead(image_file_name, function(error, results) {
        res.json(results);
    });
}

function getTranscribe(req, res) {
    console.log("controller.getTranscribe() called");
    //hide read & show getTranscribe
    model.displayTranscribe();
    //document.getElementById('section_read').style.display = 'none';
    //document.getElementById('section_transcribe').style.display = 'block';
    var id = req.query.id;
    model.getByImageNameTran(id, function(error, results) {
        res.json(results);
    });
}

function postTranscribe(req, res) {
    console.log("controller.postTranscribe() called");
    model.displayTranscribe();
    var id = req.query.id;
    model.insertEntry(id, function(error, results) {
    	res.json(results);
    });
}

module.exports = {
    read: read,
    getTranscribe: getTranscribe,
    postTranscribe: postTranscribe
}