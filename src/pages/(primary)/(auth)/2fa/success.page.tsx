import { IconBox } from "@/components/common";
import { Button } from "@/components/ui";
import { Link } from "react-router-dom";
import { Main } from "../../_components";

function ConfirmVerificationPage() {
	return (
		<Main className="mt-[112px] min-w-[370px]">
			<section className="flex flex-col items-center gap-6 text-center">
				<span className="flex size-[70px] items-center justify-center rounded-full bg-success-500">
					<IconBox
						icon="material-symbols:check-rounded"
						className="size-9 stroke-white stroke-[2px] text-white"
					/>
				</span>

				<div>
					<h1 className="text-[18px] font-bold">Congratulations!!!</h1>

					<p className="mt-3 text-[15px] text-grey-800">Your email has been verified successfully.</p>
				</div>
			</section>

			<Button theme="primary" className="mt-[60px]" asChild={true}>
				<Link to="/signin">Sign in</Link>
			</Button>
		</Main>
	);
}

export default ConfirmVerificationPage;
