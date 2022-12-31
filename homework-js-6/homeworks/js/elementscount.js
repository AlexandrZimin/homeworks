//Подсчёт количества сообщений
function getMessage(items) {
	if (Array.isArray(items)) {
		let result = items.length;
		return `You have ${result} messages`;
	} else {
		return 'Your items is not an array';
	}
}
console.log(getMessage([-5, 12, 15]));
console.log(getMessage([]));
console.log(getMessage());