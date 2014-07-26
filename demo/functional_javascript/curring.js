function curryN(fn, n) {
	//if 'n' was not supplied, use fn's length property
	if (typeof n !== 'number') {
		n = fn.length;
	};

	function getCurriedFn(prev) {
		return function(arg) {
			var args = prev.concat(arg);

			if (args.length < n) {
				return getCurriedFn(args);
			} else{
				return fn.apply(this, args);
			};
		}
	}

	return getCurriedFn([]);
}
    
module.exports = curryN