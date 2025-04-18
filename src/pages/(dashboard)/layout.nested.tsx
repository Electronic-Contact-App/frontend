import { Teleport } from "@/components/common";
import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Outlet } from "react-router-dom";

function NestedPagesLayout() {
	return (
		<div>
			<Teleport to="main>header>section">
				<Button
					unstyled={true}
					className="bg-grey-100 absolute left-0 flex size-11 items-center justify-center rounded-full"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button>
			</Teleport>

			<Outlet />
		</div>
	);
}

export default NestedPagesLayout;
