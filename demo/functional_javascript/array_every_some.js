function checkUsersValid(goodUsers) {
	function isExist(elementSub, indexSub, arraySub) {

		function isEqual(elementGood, indexGood, arrayGood) {
			return elementGood.id === elementSub.id;
		}
		
		return goodUsers.some(isEqual);
	}

	return function(submittedUsers) {
        return submittedUsers.every(isExist);
	};
}

module.exports = checkUsersValid