function getByImageNameRead(image_file_name, callback) {
	
  	var results = {list:[{date:image_file_name, entry:"today stuff happened"},
    {date:image_file_name, entry:"today 2 stuff happened"},
    {date:image_file_name, entry:"today 3 stuff happened"},
    {date:image_file_name, entry:"today 4 stuff happened"},
    {date:image_file_name, entry:"today 5 stuff happened"}]};

	callback(null, results);
}

function getByImageNameTran(id, callback) {

	var results = {
		transcribeEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}
	callback(null, results);
}

function insertEntry(id, callback) {

	var results = {success:true};
	callback(null, results);
}

function displayRead() { //maybe use this to change tag from block to none
	console.log("model.displayRead() called");
	//document.getElementById('section_read').style.display = 'block';
    //document.getElementById('section_transcribe').style.display = 'none';
}

function displayTranscribe() { //maybe use this to change tag from block to none
	console.log("model.displayTranscribe() called");
	//document.getElementById('section_read').style.display = 'none';
    //document.getElementById('section_transcribe').style.display = 'block';
}

module.exports = {
	getByImageNameRead: getByImageNameRead,
	getByImageNameTran: getByImageNameTran,
	insertEntry: insertEntry,
	displayRead: displayRead,
	displayTranscribe: displayTranscribe
};