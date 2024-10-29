import { Outlet } from "react-router-dom";

function GlobalLayout() {
	return (
		<div className="flex min-h-svh w-full flex-col items-center bg-[hsl(0,0%,98%)]">
			<Outlet />
		</div>
	);
}

export default GlobalLayout;
