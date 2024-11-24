import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Main } from "@/pages/_components";

const UploadDocument = () => {
	return (
		<Main className="px-3">
			<section className="relative mb-[41px] mt-4 text-center">
				<Button
					unstyled={true}
					className="absolute -top-1/2 mx-1 flex size-11 items-center justify-center self-start
						rounded-full bg-grey-100"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button>

				<h1>Upload Document</h1>
			</section>

			<section className="grow text-[14px]">
				<p>Kindly place the front of the card in the box for capture</p>
				<div className="h-[240px] w-[353px] rounded-[16px] bg-grey-100">.</div>
			</section>
		</Main>
	);
};

export default UploadDocument;
