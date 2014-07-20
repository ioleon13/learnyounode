function Spy(target, method) {
	var spy = {};
	spy.count = 0;

	var oldFunction = target[method];

	//key point: replace method
	target[method] = function() {
		spy.count++;
		return oldFunction.apply(target, arguments);
	}

	return spy;
}
    
module.exports = Spy