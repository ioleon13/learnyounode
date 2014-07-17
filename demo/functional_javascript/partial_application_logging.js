var slice = Array.prototype.slice;
    
function logger(namespace) {
    return function() {
    	var list = slice.call(arguments);
    	console.log.apply(null, [namespace].concat(list));
    }
}
    
module.exports = logger;