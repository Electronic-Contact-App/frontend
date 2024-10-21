import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const HomePage = lazy(() => import("./pages/(primary)/page"));

const routes = createRoutesFromElements(
	<Route>
		<Route path="/">
			<Route index={true} element={<HomePage />} />
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
