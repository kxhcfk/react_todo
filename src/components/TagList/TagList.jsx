import styles from "./TagList.module.scss";
import TagItem from "../TagItem/TagItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsActiveTag } from "../../store/todoSlice.js";

const TagList = () => {
	const dispatch = useDispatch();
	const tags = useSelector(state => state.todos.filters.tags);
	
	return (
		<div className={styles.root}>
			{tags.map(tag => (
				<TagItem
					key={tag.id}
					tag={tag}
					onClick={() => dispatch(toggleIsActiveTag({id: tag.id}))}
				/>
			))}
		</div>
	);
};

export default TagList;