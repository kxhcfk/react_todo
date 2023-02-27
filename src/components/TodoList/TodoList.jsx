import styles from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem.jsx";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Masonry } from "@mui/lab";

const TodoList = () => {
	const todos = useSelector(state => state.todos.todos);
	const tags = useSelector(state => state.todos.filters.tags);
	const isHideCompleted = useSelector(state => state.todos.filters.isHideCompleted);
	
	const sortedTodos = useMemo(() => {
		const activeFilterTags = tags.filter(tag => tag.isActive);
		
		if (activeFilterTags.length) {
			return todos.filter(todo => {
				const activeTodoTags = todo.tags.filter(tag => tag.isActive);
				
				for (let i = 0; i < activeFilterTags.length; i++) {
					const activeTag = activeFilterTags[i];
					
					for (let j = 0; j < activeTodoTags.length; j++) {
						const tag = activeTodoTags[j];
						
						if (activeTag.id === tag.id) {
							return true;
						}
					}
				}
				
				return false;
			});
		}
		
		return todos;
	}, [tags, todos]);
	
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<Masonry
					columns={{xs: 1, md: 2}}
					spacing={{xs: 3, lg: 4}}
				>
					{sortedTodos
						.filter(todo => {
							if (isHideCompleted) {
								return !todo.isCompleted;
							}
							
							return true;
						})
						.map(({id, title, body, tags, isCompleted}) => (
							<TodoItem
								key={id}
								id={id}
								title={title}
								body={body}
								tags={tags}
								isCompleted={isCompleted}
							/>
						))
					}
				</Masonry>
			</div>
		</div>
	);
};

export default TodoList;