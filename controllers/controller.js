const model = require("../models/model.js");

function read(req,res) {
	console.log("controller.read() called");
	model.displayRead();
	//var results = model.getByImageNameRead();

	//res.json(results);
};

function getTranscribe(req,res) {
	console.log("controller.getTranscribe() called");
	//hide read & show getTranscribe
	model.displayTranscribe();
	//var id = req.query.id;
	//var results = model.getByImageNameTran(id);

	//res.json(results);
};

function postTranscribe(req,res) {
	console.log("controller.postTranscribe() called");
	model.displayTranscribe();
	//var id = req.query.id;
	//var results = model.insertEntry(id);

	//res.json(results);
};

module.exports = {
	read: read,
	getTranscribe: getTranscribe,
	postTranscribe: postTranscribe
};