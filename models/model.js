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

module.exports = {
	getByImageNameRead: getByImageNameRead,
	getByImageNameTran: getByImageNameTran,
	insertEntry: insertEntry
};