import { Teleport } from "@/components/common";
import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Outlet } from "react-router-dom";

function SettingsLayout() {
	return (
		<div>
			<Teleport to="main>header>div">
				<Button
					unstyled={true}
					className="absolute left-0 flex size-11 items-center justify-center rounded-full bg-grey-100"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button>
			</Teleport>

			<Outlet />
		</div>
	);
}

export default SettingsLayout;
