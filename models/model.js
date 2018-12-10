function getByImageNameRead(image_file_name, callback) {
	
  	var results = {list:[{date:image_file_name, entry:"today stuff happened"},
    {date:image_file_name, entry:"today 2 stuff happened"},
    {date:image_file_name, entry:"today 3 stuff happened"},
    {date:image_file_name, entry:"today 4 stuff happened"},
    {date:image_file_name, entry:"today 5 stuff happened"}]};

	callback(null, results);
}

function getByImageNameTran(image_file_name, callback) {

	var results = {list:[{date:image_file_name, entry:"today stuff happened"},
    {date:image_file_name, entry:"today 2 stuff happened"},
    {date:image_file_name, entry:"today 3 stuff happened"},
    {date:image_file_name, entry:"today 4 stuff happened"},
    {date:image_file_name, entry:"today 5 stuff happened"}]};

	callback(null, results);
}

function insertEntry(entry_date, entry_text, callback) {

	var results = {date:entry_date, entry:entry_text};
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