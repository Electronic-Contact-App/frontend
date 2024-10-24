import { Outlet } from "react-router-dom";

function GlobalLayout() {
	return (
		<div className="flex min-h-svh w-full flex-col items-center">
			<Outlet />
		</div>
	);
}

export default GlobalLayout;
