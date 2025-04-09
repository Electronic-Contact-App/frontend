import { IconBox } from "@/components/common";
import { Button } from "@/components/ui";
import { Main } from "@/pages/_components";
import { Link } from "react-router-dom";

function SuccessPage() {
	return (
		<Main className="mt-[112px] min-w-[370px]">
			<section className="flex flex-col items-center gap-6 text-center">
				<span className="bg-success-500 flex size-[70px] items-center justify-center rounded-full">
					<IconBox
						icon="material-symbols:check-rounded"
						className="size-9 stroke-white stroke-[2px] text-white"
					/>
				</span>

				<div>
					<h1 className="text-[18px] font-bold">Congratulations!!!</h1>

					<p className="text-grey-800 mt-3 text-[15px]">
						You have successfully created your virtual business card
					</p>
				</div>
			</section>

			<div className="flex gap-5">
				<Button theme="ghost" className="mt-[60px]" asChild={true}>
					<Link to="">View Card</Link>
				</Button>
				<Button theme="primary" className="mt-[60px]" asChild={true}>
					<Link to="">Go Home</Link>
				</Button>
			</div>
		</Main>
	);
}

export default SuccessPage;
