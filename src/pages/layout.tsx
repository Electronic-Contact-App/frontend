import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<div className="flex min-h-svh w-full flex-col items-center bg-background">
			<Outlet />
		</div>
	);
}

export default RootLayout;
