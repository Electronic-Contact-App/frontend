import { Outlet } from "react-router-dom";
import { TabNavigation } from "../_components";

function ProfileLayout() {
	return (
		<div className="flex grow flex-col pt-5">
			<span
				id="gradient"
				className="fixed inset-0 z-[-1] mx-auto block h-[252px] w-full
					bg-[linear-gradient(to_bottom,_hsl(211,100%,45%),51%,transparent)]"
			/>

			<TabNavigation />
			<Outlet />
		</div>
	);
}

export default ProfileLayout;
