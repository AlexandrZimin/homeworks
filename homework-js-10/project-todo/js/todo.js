/* todo.js */

/**
 * @typedef {{title: String, isCompleted: Boolean, icon: String, category: String, author: Object}} Todo
 *
 * @param {object} data
 */
export function createTodo(data) {
	let todo = {}
	todo.title = data.title
	todo.isCompleted = data.completed
	if (data.completed === true){
		todo.icon = "\u2705"
	} else {
		todo.icon = "\u23F3"
	}
	todo.category = data.chosenCategory
	todo.author = {firstName: data.user.first, lastName: data.user.last}
	return todo
}

/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 */
export function addTodo(todos, todo) {
	todos.push(todo)
	return todos
}

/**
 * @param {Todo[]} todos
 */
export function countTodos(todos) {
	return todos.length
}

/**
 * @param {Todo[]} todos
 */
export function firstTodoTitle(todos) {
	return todos[0].title
}

/**
 * @param {Todo[]} todos
 */
export function lastTodoTitle(todos) {
	return todos[todos.length - 1].title
}

/**
 * @param {Todo[]} todos
 */
export function exportTitles(todos) {
	let arrayOfTitles = []
	todos.forEach(function (todo){
		arrayOfTitles.push(todo.title)
	})
	return arrayOfTitles
}