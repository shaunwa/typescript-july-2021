import { useState, useEffect } from 'react';
import axios from 'axios';
import { NewTodoForm } from './todos/NewTodoForm';
import { TodoList } from './todos/TodoList';
import { Todo } from 'shaun-todo-types';

interface TodoResponseRaw {
	id: string,
	text: string,
	urgency: 'low' | 'medium' | 'high',
	createdOn: string,
	isComplete: boolean,
	completedOn?: string,
}

function convertToTodo(raw: TodoResponseRaw): Todo {
	return {
		...raw,
		createdOn: new Date(raw.createdOn),
		completedOn: raw.completedOn ? new Date(raw.completedOn) : undefined,
	}
}

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		const loadTodos = async () => {
			const response = await axios.get<TodoResponseRaw[]>('/api/todos');
			const todos = response.data.map(raw => convertToTodo(raw));
			console.log(todos);
			setTodos(todos);
		}

		loadTodos();
	}, []);

	const addTodo = (newTodo: Todo): void => {
		setTodos([
			...todos,
			newTodo,
		]);
	}

	const markTodoAsCompleted = (todoId: string): void => {
		setTodos(
			todos.map(todo => todo.id === todoId
				? { ...todo, isComplete: true, completedOn: new Date() }
				: todo)
		)
	}

	const deleteTodo = (todoId: string): void => {
		setTodos(
			todos.filter(todo => todo.id !== todoId)
		);
	}

	return (
		<>
		<NewTodoForm onCreate={addTodo} />
		<TodoList
			todos={todos}
			onMarkAsCompleted={markTodoAsCompleted}
			onDelete={deleteTodo} />
		</>
	)
}

export default App;
