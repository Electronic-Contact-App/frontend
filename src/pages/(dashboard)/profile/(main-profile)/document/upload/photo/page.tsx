import { Main } from "@/pages/_components";

const UploadDocument = () => {
	return (
		<Main className="px-3">
			<header>
				<section className="relative mb-[41px] mt-4 text-center">
					<h1>Upload Document</h1>
				</section>
			</header>

			<section className="grow text-[14px]">
				<p>Kindly place the front of the card in the box for capture</p>
				<div className="h-[240px] w-[353px] rounded-[16px] bg-grey-100">.</div>
			</section>
		</Main>
	);
};

export default UploadDocument;
