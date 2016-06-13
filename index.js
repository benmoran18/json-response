function Response(code, message, data) {
	if(typeof code !== 'number'){
		throw new Error('status code expected a number but found ' + typeof code)
	}

	if(typeof message !== 'string'){
		throw new Error('message expected a string but found ' + typeof message)
	}

	if(data != undefined && typeof data != 'object'){
		throw new Error('data expected an object or undefined but found ' + typeof message)
	}

	this.code = code
	this.message = message
	this.data = data
}

Response.prototype.toString = function() {
	return JSON.stringify({code:this.code, message:this.message, data:this.data})
}

module.exports = Response