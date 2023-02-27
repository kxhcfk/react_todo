import styles from "./Textarea.module.scss";
import classNames from "classnames";

const Textarea = ({children, placeholder, className, value, setValue, ...props}) => {
	return (
		<div className={classNames(styles.root, className)}>
			<textarea
				className={styles.input}
				value={value}
				onChange={setValue}
				{...props}
				placeholder=" "
			/>
			<span className={styles.placeholder}>{placeholder}</span>
		</div>
	);
};

export default Textarea;