import styles from './Sidebar.module.scss'
import TagList from "../TagList/TagList.jsx";
import Checkbox from "../Checkbox/Checkbox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsShowCompleted } from "../../store/todoSlice.js";

const Sidebar = () => {
	const dispatch = useDispatch();
	const isHideCompleted = useSelector(state => state.todos.filters.isHideCompleted);
	
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<TagList/>
				
				<Checkbox checked={isHideCompleted} setChecked={() => dispatch(toggleIsShowCompleted())}>
					Hide done tasks
				</Checkbox>
			</div>
		</div>
	);
};

export default Sidebar;