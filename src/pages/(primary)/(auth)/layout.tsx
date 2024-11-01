import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Outlet } from "react-router-dom";

function AuthLayout() {
	return (
		<div className="py-16">
			<Button
				unstyled={true}
				className="mx-5 mb-4 flex size-11 items-center justify-center self-start rounded-full
					bg-grey-100"
				onClick={() => history.back()}
			>
				<ArrowIcon className="text-icon" />
			</Button>

			<Outlet />
		</div>
	);
}
export default AuthLayout;
