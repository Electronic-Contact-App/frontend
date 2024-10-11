import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";

function App() {
	return (
		<Suspense>
			<RouterProvider future={{ v7_startTransition: true }} router={router} />
		</Suspense>
	);
}

export default App;
