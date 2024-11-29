import { IconBox } from "@/components/common";
import { Link } from "react-router-dom";
import { CopyIcon, EditIcon, UploadIcon } from "@/components/icons";
import { Main } from "@/pages/_components";
import { Button } from "@/components/ui";

const actionButtons = [
	{
		text: "Share temporarily",
		image: <UploadIcon />,
		path: "#",
	},

	{
		text: "Share permanently",
		image: <UploadIcon />,
		path: "#",
	},

	{
		text: "Edit business card",
		image: <EditIcon />,
		path: "/profile/business-card/edit",
	},

	{
		text: "Copy contact",
		image: <CopyIcon />,
		path: "#",
	},
];

const actionButtonsUI = actionButtons.map((items) => (
	<div
		key={items.text}
		className="mb-1 flex items-center gap-[8px] rounded-[8px] bg-grey-50 px-6 py-[13px] text-primary"
	>
		{items.image}

		<Link to={items.path} className="text-[16px]">
			{items.text}
		</Link>
	</div>
));
const DocumentContent = () => {
	return (
		<Main className="mt-[57px] px-3">
			<section className="mb-[36px] space-y-[24px] rounded-[16px] bg-white px-[12px] py-[24px]">
				<div className="space-y-[8px]">
					<div
						className="flex flex-wrap items-center gap-[16px] border-b border-solid border-grey-100
							pb-[12px] pt-[5px] text-[14px]"
					>
						<div className="flex size-[44px] items-center justify-center rounded-[24px] bg-grey-100">
							<IconBox icon="solar:file-text-linear" className="size-6 text-grey-700" />
						</div>

						<div className="w-4/5 space-y-1">
							<div className="flex w-full items-center justify-between">
								<p>Passport</p>
								<IconBox icon="solar:menu-dots-bold" className="size-3 text-grey-700" />
							</div>
							<div className="flex w-full items-center justify-between">
								<p className="text-[12px] font-normal">2 pages.151kb.PDF</p>
								<p className="text-[10px] font-normal text-grey-700">Uploaded on: Sep 02, 2024</p>
							</div>
						</div>
					</div>

					<div
						className="flex flex-wrap items-center gap-[16px] border-b border-solid border-grey-100
							pb-[12px] pt-[5px] text-[14px]"
					>
						<div className="flex size-[44px] items-center justify-center rounded-[24px] bg-grey-100">
							<IconBox icon="solar:file-text-linear" className="size-6 text-grey-700" />
						</div>

						<div className="w-4/5 space-y-1">
							<div className="flex w-full items-center justify-between">
								<p>Work ID Card</p>
								<IconBox icon="solar:menu-dots-bold" className="size-3 text-grey-700" />
							</div>
							<div className="flex w-full items-center justify-between">
								<p className="text-[12px] font-normal">2 pages.151kb.PDF</p>
								<p className="text-[10px] font-normal text-grey-700">Uploaded on: Sep 02, 2024</p>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-[16px] pb-[12px] pt-[5px] text-[14px]">
						<div className="flex size-[44px] items-center justify-center rounded-[24px] bg-grey-100">
							<IconBox icon="solar:file-text-linear" className="size-6 text-grey-700" />
						</div>

						<div className="w-4/5 space-y-1">
							<div className="flex w-full items-center justify-between">
								<p>Driver’s license</p>
								<IconBox icon="solar:menu-dots-bold" className="size-3 text-grey-700" />
							</div>
							<div className="flex w-full items-center justify-between">
								<p className="text-[12px] font-normal">2 pages.151kb.PDF</p>
								<p className="text-[10px] font-normal text-grey-700">Uploaded on: Sep 02, 2024</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mb-[36px] space-y-[8px] rounded-[16px] bg-white px-[12px] py-[24px]">
				<div
					className="flex flex-wrap items-center justify-between gap-[12px] border-b border-solid
						border-[#E7E7E7] pb-[14.5px] pt-[6.5px] text-[14px]"
				>
					<p className="font-[400] text-grey-700">NIN number</p>
					<div className="flex items-center">
						<p className="font-medium">12345678902</p>
						<IconBox icon="solar:menu-dots-bold" className="size-4 rotate-90 text-grey-700" />
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-between gap-[12px] py-[2.5px] text-[14px]">
					<p className="font-[400] text-grey-700">BVN number</p>
					<div className="flex items-center">
						<p className="font-medium">6789009879</p>
						<IconBox icon="solar:menu-dots-bold" className="size-4 rotate-90 text-grey-700" />
					</div>
				</div>
			</section>

			{actionButtonsUI}

			<Button theme={"primary"} className="mt-[37px]">
				<div className="mr-[8px] size-[24px]">
					<IconBox icon="solar:add-circle-outline" className="size-full font-medium" />
				</div>
				Upload document
			</Button>
		</Main>
	);
};

export default DocumentContent;
