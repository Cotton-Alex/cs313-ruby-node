function getByImageNameRead() {
	
	var results = {
		readEntries: [
		{name:1, name:"entry 01"},
		{name:2, name:"entry 02"},
		{name:3, name:"entry 03"}
		]
	}
	return results;
}

function getByImageNameTran(id) {

	var results = {
		transcribeEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}
	return results;
}

function insertEntry(id) {

	var results = {
		transcribeEntries: [
		{id:1, name:"post 01"},
		{id:2, name:"post 02"},
		{id:3, name:"post 03"}
		]
	}

	return results;
}

function displayRead() {
	console.log("model.displayRead() called");
	document.getElementById('section_read').style.display = 'block';
	document.getElementById('section_transcribe').style.display = 'none';
}

function displayTranscribe() {
	console.log("model.displayTranscribe() called");
	document.getElementById('section_read').style.display = 'none';
	document.getElementById('section_transcribe').style.display = 'block';
}

module.exports = {
	getByImageNameRead: getByImageNameRead,
	getByImageNameTran: getByImageNameTran,
	insertEntry: insertEntry,
	displayRead: displayRead,
	displayTranscribe: displayTranscribe
};