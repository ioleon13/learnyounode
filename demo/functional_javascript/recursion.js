function getDependencies(tree) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.

    var result = [];
    var propArray = Object.keys(tree);

   	function isDup(retArray, element) {
   		var isDuplicate = false;
   		retArray.forEach(function(ret) {
   			if(ret === element) {
   				isDuplicate = true;
   			}
   		});

   		return isDuplicate;
   	}

    propArray.forEach(function(property) {
    	if (property === 'dependencies') {
    		function recursion(depend) {
    			var dependArray = Object.keys(depend);
    			dependArray.forEach(function(prop) {
    				var dependency = prop.concat('@');
    				var verArray = Object.keys(depend[prop]);
    				verArray.forEach(function(pro) {
    					if (pro === 'version') {
    						var versionStr = dependency.concat(depend[prop][pro]);

    						if (!isDup(result, versionStr)) {
    							result.push(versionStr);
    						}
    					} else if (pro === 'dependencies'){
    						recursion(depend[prop][pro]);
    					};
    				});
    			});
    		}

    		recursion(tree[property]);
    	}
    });

    result.sort();
    return result;
}
    
module.exports = getDependencies