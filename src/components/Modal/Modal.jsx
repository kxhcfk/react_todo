import styles from "./Modal.module.scss";

const Modal = ({visible, setVisible, children, ...props}) => {
	return (
		<div className={[styles.root, visible ? styles.active : ''].join(" ")} {...props}>
			<div
				className={styles.wrapper}
				onClick={() => setVisible(false)}
			>
				<div
					className={styles.content}
					onClick={e => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;