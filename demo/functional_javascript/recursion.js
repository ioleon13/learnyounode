function getDependencies(tree) {
    var result = [];
    var propArray = Object.keys(tree);

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

							if (result.indexOf(versionStr) === -1) {
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

    return result.sort();
}

/**official solution. use Object.property
function getDependencies(tree, result) {
    result = result || [];
    var dependencies = tree.dependencies || [];
    Object.keys(dependencies).forEach(function(dep) {
        var key = dep + '@' + tree.dependencies[dep].version;
        if (result.indexOf(key) === -1) {
            result.push(key);
        }

        getDependencies(tree.dependencies[dep], result);
    });

    return result.sort();
}*/
    
module.exports = getDependencies