// Получение имени в верхнем регистре без пробелов
function getName(name) {
	let cleaned = name
    cleaned = cleaned.toUpperCase()
    cleaned = cleaned.trim()
    return cleaned
}
console.log(getName("  aleXaNDr   "))