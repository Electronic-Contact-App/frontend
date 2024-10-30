import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./pages/layout";

const routes = createRoutesFromElements(
	<Route>
		<Route path="/" element={<RootLayout />}>
			<Route index={true} Component={lazy(() => import("./pages/(primary)/page"))} />
			<Route path="signup" Component={lazy(() => import("./pages/(primary)/signup/page"))} />
			<Route path="signin" Component={lazy(() => import("./pages/(primary)/signin/page"))} />

			<Route path="2fa">
				<Route path="verify" Component={lazy(() => import("./pages/(primary)/2fa/verify.page"))} />
				<Route path="success" Component={lazy(() => import("./pages/(primary)/2fa/success.page"))} />
			</Route>
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
