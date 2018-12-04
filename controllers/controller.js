const model = require("../models/model.js");

function cRead(req,res) {
	console.log("controller.read() called");
	
	var results = model.mGetByImageNameRead();

	res.json(results);
};

function cGetTranscribe(req,res) {
	console.log("controller.getTranscribe() called");

	var results = model.mGetByImageNameTran(id);

	res.json(results);
};

function cPostTranscribe(req,res) {
	console.log("controller.postTranscribe() called");

	var results = model.mInsertEntry(date);

	res.json(results);
};

module.exports = {
	cRead: cRead,
	cGetTranscribe: cGetTranscribe,
	cPostTranscribe: cPostTranscribe
};