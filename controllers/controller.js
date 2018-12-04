const model = require("../models/model.js");

function cRead(req,res) {
	console.log("controller.read() called");
	
	var results = model.mGetByImageNameRead();

	res.json(results);
};

function cGetTranscribe(req,res) {
	console.log("controller.getTranscribe() called");
	var id = req.query.id;
	var results = model.mGetByImageNameTran(id);

	res.json(results);
};

function cPostTranscribe(req,res) {
	console.log("controller.postTranscribe() called");
	var id = req.query.id;
	var results = model.mInsertEntry(id);

	res.json(results);
};

module.exports = {
	cRead: cRead,
	cGetTranscribe: cGetTranscribe,
	cPostTranscribe: cPostTranscribe
};