import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "../pages/Root/Root.jsx";
import Main from "../pages/Main/Main.jsx";
import TodoPage from "../pages/TodoPage/TodoPage.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root/>}>
			<Route index element={<Main/>}/>
			<Route path="todo" element={<TodoPage/>}/>
		</Route>
	)
)

const Router = () => {
	return (
		<RouterProvider router={router}/>
	);
};

export default Router;