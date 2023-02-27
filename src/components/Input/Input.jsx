import styles from "./Input.module.scss";
import classNames from "classnames";

const Input = ({children, placeholder, className, value, setValue, ...props}) => {
	return (
		<div className={classNames(styles.root, className)}>
			<input
				className={styles.input}
				value={value}
				onChange={setValue}
				type="text"
				{...props}
				placeholder=" "
			/>
			<span className={styles.placeholder}>{placeholder}</span>
		</div>
	);
};

export default Input;