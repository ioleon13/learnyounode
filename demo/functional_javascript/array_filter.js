function isShortMessage(message) {
	return message.length < 50;
}

function getMessage(element) {
	return element.message;
}

function getShortMessage(messages) {
	return messages.map(getMessage).filter(isShortMessage);
}

module.exports = getShortMessage;