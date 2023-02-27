import styles from './TagItem.module.scss'

const TagItem = ({tag, ...props}) => {
	return (
		<div {...props} className={[styles.root, tag.isActive ? styles.active : ''].join(' ')} tabIndex="0">
			<div className={styles.color} style={{backgroundColor: `${tag.color}`}}></div>
			<span className={styles.title}>{tag.title}</span>
		</div>
	);
};

export default TagItem;