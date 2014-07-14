function duckCount() {
    function isDuck(arg) {
    	return Object.prototype.hasOwnProperty.call(arg, 'quack');
    }

    function countDuck(args, index, number) {
    	if (index >= args.length) {
    		return number;
    	} else {
    		return countDuck(args,
    			index + 1,
    			number + (isDuck(args[index]) ? 1 : 0));
    	}
    }

    return countDuck(arguments, 0, 0);

    /* official solution
    return Array.prototype.slice.call(arguments)
    		.filter(function(obj) {
    			return Object.prototype.hasOwnProperty.call(obj, 'quack');
    		}).length;
	/*@}*/
}

module.exports = duckCount;