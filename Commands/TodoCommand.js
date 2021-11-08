const Models = require('../Models')
function TodoCommand (_input, _instance) {
	let project = this.options.storage.get('project', null)
	let todos = this.options.storage.get('todos', [])
	this.say(`➕ add todo: ${ _input } with index ${ todos.length }`)

	let todo = new Models.Todo({
		project: project,
		task: _input
	})
	todos.push(todo)

	this.options.storage.set('todos', todos)

	this.say(`- to finish this task, you just need to enter /done ${ todos.length - 1 }`)

	return todo
}

module.exports = {
	cmd: 'todo',
	description: 'adds a new task to your todo list.',
	handle: TodoCommand
}