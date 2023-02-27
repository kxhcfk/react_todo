import styles from './Button.module.scss'
import classNames from "classnames";

const Button = ({children, className, ...props}) => {
	return (
		<button {...props} className={classNames(styles.root, className)}>
			{children}
		</button>
	);
};

export default Button;