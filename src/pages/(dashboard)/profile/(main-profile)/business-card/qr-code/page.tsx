import { IconBox, Image } from "@/components/common";
import { Link } from "react-router-dom";
import { ArrowIcon, CopyIcon, EditIcon, UploadIcon } from "@/components/icons";
import { Main } from "@/pages/_components";
import { qrCode } from "@/assets";
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

const BusinessCard = () => {
	return (
		<Main>
			<section className="relative mt-4 text-center">
				<Button
					unstyled={true}
					className="absolute -top-1/2 mx-1 flex size-11 items-center justify-center self-start
						rounded-full bg-grey-100"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button>

				<h1>Edit business card</h1>
			</section>

			<section className="mb-[36px] space-y-[24px]">
				<Image src={qrCode} alt="" width={327} height={327} />

				<Link to="qr" className="flex items-center gap-[4px] text-[14px] font-normal text-secondary">
					View contact as text <IconBox icon="quill:chevron-right" className="mt-[3px]" />
				</Link>
			</section>
			{actionButtonsUI}
		</Main>
	);
};

export default BusinessCard;
