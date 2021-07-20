import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Todo } from 'shaun-todo-types';

export interface NewTodoFormProps {
	onCreate: (newTodo: Todo) => void;
}

export const NewTodoForm: React.FC<NewTodoFormProps> = ({ onCreate }) => {
	const [text, setText] = useState('');
	const [urgency, setUrgency] = useState<'low' | 'medium' | 'high'>('low');

	return (
		<div>
			<h3>Add a New Todo:</h3>
			<input
				type="text"
				placeholder="New Todo Text"
				value={text}
				onChange={e => setText(e.target.value)} />
			<div>
				<input
					type="radio"
					value="low"
					name="urgency"
					checked={urgency === 'low'}
					onChange={() => setUrgency('low')} /> Low
				<input
					type="radio"
					value="medium"
					name="urgency"
					checked={urgency === 'medium'}
					onChange={() => setUrgency('medium')} /> Medium
				<input
					type="radio"
					value="high"
					name="urgency"
					checked={urgency === 'high'}
					onChange={() => setUrgency('high')} /> High
			</div>
			<button onClick={() => {
				const newTodo: Todo = {
					id: uuid(),
					text,
					urgency,
					isComplete: false,
					createdOn: new Date(),
				};

				onCreate(newTodo);

				setText('');
				setUrgency('low');
			}}>Create New Todo</button>
		</div>
	)
}