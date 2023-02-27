import { Link } from "react-router-dom";
import "./Main.scss";
import Logo from "../../components/Logo/Logo.jsx";
import Button from "../../components/Button/Button.jsx";

const Main = () => {
	return (
		<div className="todo">
			<Logo/>
			<div>
				<Link to="todo">
					<Button>
						Get started
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Main;