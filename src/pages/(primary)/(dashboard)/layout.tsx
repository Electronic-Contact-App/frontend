import { Outlet } from "react-router-dom";
import { BottomNavigation } from "./_components";

function DashboardLayout() {
	return (
		<div className="flex grow flex-col pb-5">
			<Outlet />
			<BottomNavigation />
		</div>
	);
}

export default DashboardLayout;
