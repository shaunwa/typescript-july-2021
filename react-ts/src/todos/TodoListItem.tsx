import { Todo } from 'shaun-todo-types';

export interface TodoListItemProps {
	todo: Todo,
	onMarkAsCompleted: (todoId: string) => void,
	onDelete: (todoId: string) => void,
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
	todo,
	onMarkAsCompleted,
	onDelete,
}) => {
	return (
		<>
		<h3>{todo.text}</h3>
		<p>Urgency: {todo.urgency}</p>
		{todo.isComplete && <p>Completed!</p>}
		<p>Created on: {todo.createdOn.toDateString()}</p>
		{todo.isComplete && <p>Completed on: {todo.completedOn?.toDateString()}</p>}
		<button onClick={() => onMarkAsCompleted(todo.id)}>Mark As Completed</button>
		<button onClick={() => onDelete(todo.id)}>Delete</button>
		</>
	);
}
