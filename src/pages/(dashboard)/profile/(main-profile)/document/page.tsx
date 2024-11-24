import { Main } from "@/pages/_components";
import { document } from "@/assets";
import { IconBox, Image } from "@/components/common";
import { Button } from "@/components/ui";

function DocumentPage() {
	return (
		<Main className="pt-[87px]">
			<section className="mx-auto grow text-center">
				<Image src={document} width={200} height={152} className="mx-auto" />
				<p className="mx-auto w-4/5 text-[14px]">You don’t have any document uploaded</p>
			</section>

			<section className="space-y-3">
				<div className="flex items-center gap-2">
					<span className="grid size-6 place-items-center rounded-full bg-grey-100">
						<IconBox
							icon="material-symbols:shield-lock-outline-rounded"
							className="size-5 text-[hsl(137,99%,39%)]"
						/>
					</span>

					<p className="text-[12px]">Documents uploaded are end-to-end encrypted</p>
				</div>
				<Button theme={"primary"} className="">
					<div className="mr-[8px] size-[24px]">
						<IconBox icon="solar:add-circle-outline" className="size-full font-medium" />
					</div>
					Upload document
				</Button>
			</section>
		</Main>
	);
}

export default DocumentPage;
