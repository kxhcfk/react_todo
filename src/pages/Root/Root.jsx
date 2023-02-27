import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<main className="main">
			<Outlet/>
		</main>
	);
};

export default Root;