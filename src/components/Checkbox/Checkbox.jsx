import styles from "./Checkbox.module.scss";

const Checkbox = ({checked, setChecked, children, ...props}) => {
	return (
		<label className={styles.root} {...props} tabIndex="0">
			<input
				checked={checked}
				onChange={setChecked}
				className={styles.checkbox}
				type="checkbox"
			/>
			<span className={styles.field}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						d="M3 9.5L7.66667 14L17 5"
						stroke="#69665C"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			{children
				&& (
					<div className={styles.text}>
						{children}
					</div>
				)
			}
		</label>
	);
};

export default Checkbox;