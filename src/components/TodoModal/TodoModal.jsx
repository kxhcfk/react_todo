import styles from "./TodoModal.module.scss";
import Button from "../Button/Button.jsx";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input.jsx";
import Textarea from "../Textarea/Textarea.jsx";
import { addTodo, changeTodo, setIsShowAddTodo } from "../../store/todoSlice.js";
import { useSearchParams } from "react-router-dom";

const defaultTodo = {
	title: "",
	body: "",
	isCompleted: false,
};

const TodoModal = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos.todos);
	const allTags = useSelector(state => state.todos.tags);
	const [searchParams, setSearchParams] = useSearchParams();
	const idSearchParam = searchParams.get("id");
	const [todo, setTodo] = useState({
		...defaultTodo,
		tags: [...allTags],
	});
	
	useMemo(() => {
		if (idSearchParam) {
			const todoForSearchId = todos.find(todo => todo.id === +idSearchParam);
			
			setTodo(todoForSearchId);
		}
	}, [idSearchParam]);
	
	const onChangeTag = (id) => {
		setTodo({
			...todo,
			tags: todo.tags.map(tag => {
				if (tag.id === id) {
					return {
						...tag,
						isActive: !tag.isActive,
					};
				}
				
				return tag;
			}),
		});
	};
	
	const onClickCancel = () => {
		dispatch(setIsShowAddTodo({isShowAddTodo: false}));
		setSearchParams({});
	};
	
	const onClickAdd = () => {
		if (!todo.title || !todo.body) {
			return;
		}
		
		dispatch(addTodo({
			...todo,
			id: Date.now(),
		}));
		setTodo({
			...defaultTodo,
			tags: [...allTags],
		});
		dispatch(setIsShowAddTodo({isShowAddTodo: false}));
		setSearchParams({});
	};
	
	const onClickSave = () => {
		if (!todo.title || !todo.body) {
			return;
		}
		
		dispatch(changeTodo(todo));
		setTodo({
			...defaultTodo,
			tags: [...allTags],
		});
		dispatch(setIsShowAddTodo({isShowAddTodo: false}));
		setSearchParams({});
	};
	
	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<Button
					onClick={onClickCancel}
					className={styles.cancel}
				>Cancel</Button>
				{idSearchParam
				 ? <Button onClick={onClickSave}>Save</Button>
				 : <Button onClick={onClickAdd}>Add</Button>
				}
			
			</header>
			<div>
				<div className={styles.item}>
					<span className={styles.item__title}>Title</span>
					<Input
						placeholder="add a title ..."
						value={todo.title}
						setValue={e => setTodo({...todo, title: e.target.value})}
					/>
				</div>
				<div className={styles.item}>
					<span className={styles.item__title}>Description</span>
					<Textarea
						placeholder="add a description ..."
						value={todo.body}
						setValue={e => setTodo({...todo, body: e.target.value})}
						rows="5"
					/>
				</div>
				<div className={styles.item}>
					<span className={styles.item__title}>Tags</span>
					<ul className={styles.tags}>
						{todo.tags.map(tag => (
							<li
								key={tag.id}
								className={[styles.tag, tag.isActive ? styles.tag__active : null].join(" ")}
								onClick={() => onChangeTag(tag.id)}
							>
								<div
									className={styles.tag__color}
									style={{backgroundColor: `${tag.color}`}}
								></div>
								<span className={styles.tag__title}>{tag.title}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TodoModal;