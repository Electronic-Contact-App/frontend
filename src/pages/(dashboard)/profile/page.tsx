import { IconBox } from "@/components/common";
import { Main } from "../../_components";
import { Link } from "react-router-dom";
import { CopyIcon, EditIcon, UploadIcon } from "@/components/icons";

const details = [
	{
		detailCategory: "Name",
		detailContent: "Anosike miracle",
	},

	{
		detailCategory: "Phone",
		detailContent: "07062462466",
	},

	{
		detailCategory: "Email",
		detailContent: "anosikemiracle@gmail.com",
	},
	{
		detailCategory: "About",
		detailContent:
			"Hey there! I’m a creative UI/UX designer who loves turning ideas into engaging digital experiences. I’m all about simplicity, smart design, and making sure users enjoy every interaction. When I’m not designing, you’ll find me exploring new apps, playing games, or enjoying a good cup of coffee",
	},
];

const detailsUI = details.map((detail) => (
	<div
		key={detail.detailCategory}
		className="flex flex-wrap items-center justify-between gap-[12px] border-b border-solid
			border-grey-100 pb-[12px] pt-[5px] text-[14px]"
	>
		<p className="font-[400] text-grey-700">{detail.detailCategory}</p>
		<p className="font-medium">{detail.detailContent}</p>
	</div>
));

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
		path: "/profile/edit",
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

const ContactDetail = () => {
	return (
		<Main className="px-3">
			<div
				className="mx-auto mb-[24px] flex size-[110px] items-center justify-center rounded-[55px]
					bg-grey-50 text-center"
			>
				<IconBox icon="solar:user-bold" className="size-12 text-grey-700" />
			</div>
			<section className="mb-[36px] space-y-[24px] rounded-[16px] bg-white px-[12px] py-[24px]">
				<div className="space-y-[8px]">{detailsUI}</div>
				<Link
					to="/profile/qr-code"
					className="flex items-center gap-[4px] text-[14px] font-normal text-secondary"
				>
					Generate QR code <IconBox icon="quill:chevron-right" className="mt-[3px]" />
				</Link>
			</section>
			{actionButtonsUI}
		</Main>
	);
};

export default ContactDetail;
