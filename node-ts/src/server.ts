import express from 'express'
import { Todo } from 'shaun-todo-types';

const app = express();

let todos: Todo[] = [{
	id: '123',
	text: 'Learn Typescript',
	urgency: 'high',
	isComplete: false,
	createdOn: new Date(),
}, {
	id: '234',
	text: 'Mow the lawn',
	urgency: 'low',
	isComplete: false,
	createdOn: new Date(),
}, {
	id: '345',
	text: 'Buy groceries',
	urgency: 'medium',
	isComplete: true,
	createdOn: new Date(),
	completedOn: new Date(),
}];

app.get('/api/todos', (req, res) => {
	res.json(todos);
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});