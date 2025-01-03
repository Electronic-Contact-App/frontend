import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./pages/layout";

const DashboardLayout = lazy(() => import("./pages/(dashboard)/layout"));
const AuthLayout = lazy(() => import("./pages/(auth)/layout"));
const MainProfileLayout = lazy(() => import("./pages/(dashboard)/profile/(main-profile)/layout"));
const NestedPagesLayout = lazy(() => import("./pages/(dashboard)/layout.nested"));

const routes = createRoutesFromElements(
	<Route path="/" Component={RootLayout}>
		<Route Component={DashboardLayout}>
			<Route index={true} Component={lazy(() => import("./pages/(dashboard)/page"))} />

			<Route path="contact" Component={lazy(() => import("./pages/(dashboard)/contact/page"))} />

			<Route path="event" Component={lazy(() => import("./pages/(dashboard)/event/page"))} />

			<Route path="chat" Component={lazy(() => import("./pages/(dashboard)/chat/page"))} />

			<Route Component={MainProfileLayout}>
				<Route path="profile" Component={lazy(() => import("./pages/(dashboard)/profile/page"))} />
				<Route
					path="profile/business-card"
					Component={lazy(
						() => import("./pages/(dashboard)/profile/(main-profile)/business-card/page")
					)}
				/>
				<Route
					path="profile/document"
					Component={lazy(() => import("./pages/(dashboard)/profile/(main-profile)/document/page"))}
				/>
			</Route>
		</Route>

		<Route Component={NestedPagesLayout}>
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
			<Route
				path="contact/details"
				Component={lazy(() => import("./pages/(dashboard)/contact/details/page"))}
			/>
			<Route
				path="contact/details/success"
				Component={lazy(() => import("./pages/(dashboard)/contact/details/success/page"))}
			/>
			<Route
				path="contact/scan-qr"
				Component={lazy(() => import("./pages/(dashboard)/contact/scan-qr/page"))}
			/>
			<Route
				path="contact/how-to-tutorial"
				Component={lazy(() => import("./pages/(dashboard)/contact/how-to-tutorial/page"))}
			/>

			<Route
				path="profile/edit"
				Component={lazy(() => import("./pages/(dashboard)/profile/edit/page"))}
			/>
			<Route
				path="profile/settings"
				Component={lazy(() => import("./pages/(dashboard)/profile/settings/page"))}
			/>
			<Route
				path="profile/settings/privacy"
				Component={lazy(() => import("./pages/(dashboard)/profile/settings/privacy/page"))}
			/>
			<Route
				path="profile/settings/privacy/profile"
				Component={lazy(() => import("./pages/(dashboard)/profile/settings/privacy/profile/page"))}
			/>
			<Route
				path="profile/settings/privacy/business-card"
				Component={lazy(
					() => import("./pages/(dashboard)/profile/settings/privacy/business-card/page")
				)}
			/>
			<Route
				path="profile/settings/privacy/document"
				Component={lazy(() => import("./pages/(dashboard)/profile/settings/privacy/document/page"))}
			/>
			<Route
				path="profile/settings/privacy/business-card"
				Component={lazy(() => import("./pages/(dashboard)/profile/(main-profile)/business-card/page"))}
			/>
			<Route
				path="profile/settings/privacy/document"
				Component={lazy(() => import("./pages/(dashboard)/profile/(main-profile)/document/page"))}
			/>
			<Route
				path="profile/business-card/qr-code"
				Component={lazy(
					() => import("./pages/(dashboard)/profile/(main-profile)/business-card/qr-code/page")
				)}
			/>
			<Route
				path="profile/business-card/edit"
				Component={lazy(
					() => import("./pages/(dashboard)/profile/(main-profile)/business-card/edit/page")
				)}
			/>
			<Route
				path="profile/edit"
				Component={lazy(() => import("./pages/(dashboard)/profile/edit/page"))}
			/>
			<Route
				path="profile/document/choose"
				Component={lazy(
					() => import("./pages/(dashboard)/profile/(main-profile)/document/choose/page")
				)}
			/>
			<Route
				path="profile/document/upload"
				Component={lazy(
					() => import("./pages/(dashboard)/profile/(main-profile)/document/upload/page")
				)}
			/>
			<Route
				path="profile/document/upload/photo"
				Component={lazy(
					() => import("./pages/(dashboard)/profile/(main-profile)/document/upload/photo/page")
				)}
			/>
			<Route
				path="profile/document/upload/success"
				Component={lazy(
					() => import("./pages/(dashboard)/profile/(main-profile)/document/upload/success/page")
				)}
			/>
		</Route>

		<Route Component={AuthLayout}>
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
	return <RouterProvider router={browserRouter} />;
}
