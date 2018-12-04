function mGetByImageNameRead() {
	
	var results = {
		readEntries: [
		{name:1, name:"entry 01"},
		{name:2, name:"entry 02"},
		{name:3, name:"entry 03"}
		]
	}
	return results;
}

function mGetByImageNameTran(id) {

	var results = {
		transcribeEntries: [
		{id:1, name:"entry 01"},
		{id:2, name:"entry 02"},
		{id:3, name:"entry 03"}
		]
	}
	return results;
}

function mInsertEntry(date) {

	var results = {
		transcribeEntries: [
		{id:1, name:"post 01"},
		{id:2, name:"post 02"},
		{id:3, name:"post 03"}
		]
	}

	return results;
}

module.exports = {
	mGetByImageNameRead: mGetByImageNameRead,
	mGetByImageNameTran: mGetByImageNameTran,
	mInsertEntry: mInsertEntry
};