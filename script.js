	let student = {
		name : "Shashank",
	};
	Object.prototype.getkeys = function(){
		return Object.keys(this);
	};
	console.log(getkeys());

