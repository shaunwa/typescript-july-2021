import { Todo } from 'shaun-todo-types';
import { TodoListItem } from './TodoListItem';

export interface TodoListProps {
	todos: Todo[],
	onMarkAsCompleted: (todoId: string) => void,
	onDelete: (todoId: string) => void,
};

export const TodoList: React.FC<TodoListProps> = ({
	todos,
	onMarkAsCompleted,
	onDelete,
}) => {
	return (
		<>
		{todos.map(todo => {
			return (
				<TodoListItem
					key={todo.id}
					todo={todo}
					onMarkAsCompleted={onMarkAsCompleted}
					onDelete={onDelete} />
			)
		})}
		</>
	)
}