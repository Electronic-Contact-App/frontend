import { IconBox } from "@/components/common";
import { Button } from "@/components/ui";
import { Main } from "@/pages/_components";
import { Link } from "react-router-dom";

const UploadSuccess = () => {
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

					<p className="mt-3 text-[15px] text-grey-800">Your password has been reset successfully.</p>
				</div>
			</section>

			<section className="flex gap-4">
				<Button
					unstyled={true}
					className="mt-[60px] flex w-full items-center justify-center rounded-[8px] border
						border-solid border-blue-200 bg-blue-50 text-[16px] text-primary"
					asChild={true}
				>
					<Link to="/profile/document/document-content">Done</Link>
				</Button>
				<Button theme="primary" className="mt-[60px]" asChild={true}>
					<Link to="#">View</Link>
				</Button>
			</section>
		</Main>
	);
};
export default UploadSuccess;
