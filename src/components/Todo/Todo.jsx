import styles from "./Todo.module.scss";
import Sidebar from "../Sidebar/Sidebar.jsx";
import TodoList from "../TodoList/TodoList.jsx";
import Modal from "../Modal/Modal.jsx";
import TodoModal from "../TodoModal/TodoModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowAddTodo } from "../../store/todoSlice.js";
import { useSearchParams } from "react-router-dom";

const Todo = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const isShowAddTodo = useSelector(state => state.todos.isShowAddTodo);
	
	const setVisible = (isVisible) => {
		dispatch(setIsShowAddTodo({setIsShowAddTodo: isVisible}));
		searchParams.delete('id');
		setSearchParams({...searchParams})
	};
	
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.content}>
					<header className={styles.header}>
						<h1 className={styles.title}>todo</h1>
						<button
							className={styles.add}
							onClick={() => dispatch(setIsShowAddTodo({isShowAddTodo: true}))}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="38"
								height="38"
								viewBox="0 0 38 38"
								fill="none"
							>
								<path
									d="M19.5 2V19M19.5 36V19M19.5 19H36H2"
									stroke="#69665C"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</header>
					<div className={styles.body}>
						<Sidebar/>
						<TodoList/>
					</div>
				</div>
			</div>
			<Modal
				visible={isShowAddTodo}
				setVisible={setVisible}
			>
				<TodoModal/>
			</Modal>
		</div>
	);
};

export default Todo;