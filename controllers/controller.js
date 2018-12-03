function index(req,res) {
	console.log("funcController.index() called");

	var results = {
		indexEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}

	res.json(results);
}

function read(req,res) {
	console.log("funcController.read() called");
	
	var results = {
		readEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}

	res.json(results);
}

function getTranscribe(req,res) {
	console.log("transcribeController.getTranscribe() called");

	var results = {
		transcribeEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}

	res.json(results);
}

function postTranscribe(req,res) {
	console.log("transcribeController.postTranscribe() called");

	var results = {
		postTranscribeEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}

	res.json(results);
}

module.exports = {
	index: index,
	read: read,
	getTranscribe: getTranscribe,
	postTranscribe: postTranscribe
};