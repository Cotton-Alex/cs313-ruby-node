function index(req,res) {
	console.log("funcLib.index() called")
}

function read(req,res) {
	console.log("funcLib.read() called")
}

function transcribe(req,res) {
	console.log("funcLib.transcribe() called")
}




module.exports = {
	index: index,
	read: read,
	transcribe: transcribe
};