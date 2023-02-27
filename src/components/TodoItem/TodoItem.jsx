import styles from "./TodoItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setIsShowAddTodo, toggleCompletedTodo } from "../../store/todoSlice.js";
import Checkbox from "../Checkbox/Checkbox.jsx";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const TodoItem = ({id, title, body, tags, isCompleted}) => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [isActiveMore, setIsActiveMore] = useState(false);
	
	const onClickEdit = () => {
		dispatch(setIsShowAddTodo({isShowAddTodo: true}));
		setSearchParams({id: id})
		setIsActiveMore(false)
	}
	
	return (
		<article className={[styles.root, isCompleted ? styles.done : ""].join(" ")}>
			<header className={styles.header}>
				<h3 className={styles.title}>{title}</h3>
				<button
					className={styles.more}
					onClick={() => setIsActiveMore(!isActiveMore)}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<ul className={[styles.moreContent, isActiveMore ? styles.active : ''].join(' ')}>
					<li>
						<button onClick={onClickEdit}>Edit...</button>
					</li>
					<li>
						<button onClick={() => dispatch(removeTodo({id}))}>Delete</button>
					</li>
				</ul>
			</header>
			
			<div className={styles.description}>
				{body}
			</div>
			
			<footer className={styles.footer}>
				<ul className={styles.list}>
					{tags
						.filter(tag => tag.isActive)
						.map(({id, color}) => (
						<li
							key={id}
							style={{backgroundColor: `${color}`}}
						></li>
					))}
				</ul>
				<Checkbox
					checked={isCompleted}
					setChecked={() => {
						dispatch(toggleCompletedTodo({id}))
					}}
				>
					Done
				</Checkbox>
			</footer>
		</article>
	);
};

export default TodoItem;