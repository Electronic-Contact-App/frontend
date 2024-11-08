import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<div id="root-layout" className="flex w-full max-w-[393px] grow flex-col px-5">
			<Outlet />
		</div>
	);
}

export default RootLayout;
