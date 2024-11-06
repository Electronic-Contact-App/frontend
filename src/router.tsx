import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./pages/layout";

const routes = createRoutesFromElements(
	<Route path="/" element={<RootLayout />}>
		<Route Component={lazy(() => import("./pages/(primary)/(dashboard)/layout"))}>
			<Route index={true} Component={lazy(() => import("./pages/(primary)/(dashboard)/page"))} />
			<Route Component={lazy(() => import("./pages/(primary)/(dashboard)/profile/layout"))}>
				<Route
					path="profile/contact-detail"
					Component={lazy(() => import("./pages/(primary)/(dashboard)/profile/contact-detail.page"))}
				/>
			</Route>
		</Route>

		<Route Component={lazy(() => import("./pages/(primary)/(auth)/layout"))}>
			<Route path="signup" Component={lazy(() => import("./pages/(primary)/(auth)/signup/page"))} />
			<Route path="signin" Component={lazy(() => import("./pages/(primary)/(auth)/signin/page"))} />
			<Route
				path="2fa/verify"
				Component={lazy(() => import("./pages/(primary)/(auth)/2fa/verify.page"))}
			/>
			<Route
				path="2fa/success"
				Component={lazy(() => import("./pages/(primary)/(auth)/2fa/success.page"))}
			/>
			<Route
				path="2fa/success"
				Component={lazy(() => import("./pages/(primary)/(auth)/2fa/success.page"))}
			/>
			<Route
				path="forgot-password"
				Component={lazy(() => import("./pages/(primary)/(auth)/forgot-password/page"))}
			/>
			<Route
				path="reset-password"
				Component={lazy(() => import("./pages/(primary)/(auth)/reset-password/page"))}
			/>
			<Route
				path="reset-password/verify"
				Component={lazy(() => import("./pages/(primary)/(auth)/reset-password/verify.page"))}
			/>
			<Route
				path="reset-password/success"
				Component={lazy(() => import("./pages/(primary)/(auth)/reset-password/success.page"))}
			/>
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
