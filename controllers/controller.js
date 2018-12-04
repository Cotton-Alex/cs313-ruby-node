const models = require("../models/model.js");

function cRead(req,res) {
	console.log("controller.read() called");
	
	var results = models.mGetByImageNameRead(name);

	res.json(results);
};

function cGetTranscribe(req,res) {
	console.log("controller.getTranscribe() called");

	var results = models.mGetByImageNameTran(name);

	res.json(results);
};

function cPostTranscribe(req,res) {
	console.log("controller.postTranscribe() called");

	var results = models.mInsertEntry(entry);

	res.json(results);
};

module.exports = {
	cRead: cRead,
	cGetTranscribe: cGetTranscribe,
	cPostTranscribe: cPostTranscribe
};