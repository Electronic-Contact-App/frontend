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
			border-[#E7E7E7] pb-[12px] pt-[5px] text-[14px]"
	>
		<p className="font-[400] text-[#7F7F7F]">{detail.detailCategory}</p>
		<p className="font-medium text-[#353535]">{detail.detailContent}</p>
	</div>
));

const actionButtons = [
	{
		text: "Share temporarily",
		image: <UploadIcon />,
	},

	{
		text: "Share permanently",
		image: <UploadIcon />,
	},

	{
		text: "Edit contact",
		image: <EditIcon />,
	},

	{
		text: "Copy contact",
		image: <CopyIcon />,
	},
];

const actionButtonsUI = actionButtons.map((items) => (
	<div
		key={items.text}
		className="mb-1 flex items-center gap-[8px] rounded-[8px] bg-[#F1F1F1] px-6 py-[13px] text-[#1F6EC9]"
	>
		{items.image}

		<Link to="/profile/edit" className="text-[16px]">
			{items.text}
		</Link>
	</div>
));

const ContactDetail = () => {
	return (
		<Main className="px-3">
			<div
				className="mx-auto mb-[24px] flex size-[110px] items-center justify-center rounded-[55px]
					bg-[#F1F1F1] text-center"
			>
				<IconBox icon="solar:user-bold" className="size-12 text-[#7F7F7F]" />
			</div>
			<section className="mb-[36px] space-y-[24px] rounded-[16px] bg-[#fff] px-[12px] py-[24px]">
				<div className="space-y-[8px]">{detailsUI}</div>
				<Link to="qr" className="flex items-center gap-[4px] text-[14px] font-normal text-[#DA700A]">
					Generate QR code <IconBox icon="quill:chevron-right" className="mt-[3px]" />
				</Link>
			</section>
			{actionButtonsUI}
		</Main>
	);
};

export default ContactDetail;
