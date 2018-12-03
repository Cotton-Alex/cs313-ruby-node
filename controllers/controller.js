function index(req,res) {
	console.log("controller.index() called");

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
	console.log("controller.read() called");
	
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
	console.log("controller.getTranscribe() called");

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
	console.log("controller.postTranscribe() called");

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