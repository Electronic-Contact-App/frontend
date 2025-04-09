import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Outlet } from "react-router-dom";

function AuthLayout() {
	return (
		<div>
			<Button
				unstyled={true}
				className="bg-grey-100 mt-4 flex size-11 items-center justify-center self-start rounded-full"
				onClick={() => history.back()}
			>
				<ArrowIcon className="text-icon" />
			</Button>

			<Outlet />
		</div>
	);
}
export default AuthLayout;
