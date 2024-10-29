import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const GlobalLayout = lazy(() => import("./pages/layout"));
const HomePage = lazy(() => import("./pages/(primary)/page"));
const SignUpPage = lazy(() => import("./pages/(primary)/signup/page"));
const SignInPage = lazy(() => import("./pages/(primary)/signin/page"));

const TwoFactorConfirmPage = lazy(() => import("./pages/(primary)/2fa/verify.page"));
const TwoFactorSuccessPage = lazy(() => import("./pages/(primary)/2fa/success.page"));

const routes = createRoutesFromElements(
	<Route>
		<Route path="/" element={<GlobalLayout />}>
			<Route index={true} element={<HomePage />} />
			<Route path="signup" element={<SignUpPage />} />
			<Route path="signin" element={<SignInPage />} />

			<Route path="2fa">
				<Route path="verify" element={<TwoFactorConfirmPage />} />
				<Route path="success" element={<TwoFactorSuccessPage />} />
			</Route>
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
