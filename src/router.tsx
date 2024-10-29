import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const GlobalLayout = lazy(() => import("./pages/layout"));
const HomePage = lazy(() => import("./pages/(primary)/page"));
const SignUpPage = lazy(() => import("./pages/(primary)/signup/page"));
const SignInPage = lazy(() => import("./pages/(primary)/signin/page"));
const ConfirmVerificationPage = lazy(() => import("./pages/(primary)/2fa/confirm-verification.page"));

const routes = createRoutesFromElements(
	<Route>
		<Route path="/" element={<GlobalLayout />}>
			<Route index={true} element={<HomePage />} />
			<Route path="signup" element={<SignUpPage />} />
			<Route path="signin" element={<SignInPage />} />
			<Route path="confirm-verification" element={<ConfirmVerificationPage />} />
		</Route>
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider future={{ v7_startTransition: true }} router={browserRouter} />;
}
