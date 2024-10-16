import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const routes = createRoutesFromElements(<Route path="/" element={<p>Hello World</p>} />);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
