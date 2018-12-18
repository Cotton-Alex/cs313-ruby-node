const model = require("../models/model.js");

function read(req, res) {
    console.log("controller.read() called");
    
    var image_file_name = req.query.image_file_name;
    console.log("from controller: image_file_name = " + image_file_name);

    model.getByImageNameRead(image_file_name, function(error, results) {
        res.json(results);
    });
}

function getTranscribe(req, res) {
    console.log("controller.getTranscribe() called");

    var image_file_name = req.query.image_file_name;
    console.log("from controller: image_file_name = " + image_file_name);

    model.getByImageNameTran(image_file_name, function(error, results) {
        res.json(results);
    });
}

function postTranscribe(req, res) {
    console.log("controller.postTranscribe() called");
    //var id = req.query.id;
    // var entry_date = "date" //document.getelemen
    // var entry_text = "lots of text from text box";
    var entry_date = htmlspecialchars($_POST['entry_date']);
    var entry_text = htmlspecialchars($_POST['entry_text']);
    console.log(entry_date);
    console.log(entry_text);
     model.insertEntry(entry_date, entry_text, function(error, results) {
     	res.json(results);
    });
}

module.exports = {
    read: read,
    getTranscribe: getTranscribe,
    postTranscribe: postTranscribe
}