function read(req,res) {
	console.log("funcLib.read() called")
}

function transcribe(req,res) {
	console.log("funcLib.transcribe() called")
}




module.exports = {
	read: read,
	transcribe: transcribe
};