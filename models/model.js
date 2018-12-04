function mGetByImageNameRead() {
	
	var results = {
		readEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}
	return results;
}

function mGetByImageNameTran(name) {

	var results = {
		transcribeEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}
	return results;
}

function mInsertEntry(entry) {

	var results = {success:true};

	return results;
}

module.exports = {
	mGetByImageNameRead: mGetByImageNameRead,
	mGetByImageNameTran: mGetByImageNameTran,
	mInsertEntry: mInsertEntry
};