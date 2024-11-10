import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./pages/layout";

const routes = createRoutesFromElements(
	<Route path="/" element={<RootLayout />}>
		<Route Component={lazy(() => import("./pages/(dashboard)/layout"))}>
			<Route index={true} Component={lazy(() => import("./pages/(dashboard)/page"))} />

			<Route path="contact" Component={lazy(() => import("./pages/(dashboard)/contact/page"))} />
			<Route
				path="contact/virtual-business-card"
				Component={lazy(() => import("./pages/(dashboard)/contact/virtual-business-card/page"))}
			/>
			<Route
				path="contact/virtual-business-card/create"
				Component={lazy(() => import("./pages/(dashboard)/contact/virtual-business-card/create/page"))}
			/>
			<Route
				path="contact/virtual-business-card/create/success"
				Component={lazy(
					() => import("./pages/(dashboard)/contact/virtual-business-card/create/success/page")
				)}
			/>

			<Route Component={lazy(() => import("./pages/(dashboard)/profile/layout"))}>
				<Route path="profile" Component={lazy(() => import("./pages/(dashboard)/profile/page"))} />
				<Route
					path="profile/business-card"
					Component={lazy(() => import("./pages/(dashboard)/profile/business-card/page"))}
				/>
				<Route
					path="profile/document"
					Component={lazy(() => import("./pages/(dashboard)/profile/document/page"))}
				/>
			</Route>
		</Route>

		<Route Component={lazy(() => import("./pages/(auth)/layout"))}>
			<Route path="signup" Component={lazy(() => import("./pages/(auth)/signup/page"))} />
			<Route path="signin" Component={lazy(() => import("./pages/(auth)/signin/page"))} />
			<Route path="2fa/verify" Component={lazy(() => import("./pages/(auth)/2fa/verify/page"))} />
			<Route path="2fa/success" Component={lazy(() => import("./pages/(auth)/2fa/success/page"))} />
			<Route
				path="forgot-password"
				Component={lazy(() => import("./pages/(auth)/forgot-password/page"))}
			/>
			<Route
				path="reset-password"
				Component={lazy(() => import("./pages/(auth)/reset-password/page"))}
			/>
			<Route
				path="reset-password/verify"
				Component={lazy(() => import("./pages/(auth)/reset-password/verify/page"))}
			/>
			<Route
				path="reset-password/success"
				Component={lazy(() => import("./pages/(auth)/reset-password/success/page"))}
			/>
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
