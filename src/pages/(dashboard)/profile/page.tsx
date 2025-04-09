import { IconBox } from "@/components/common";
import { CopyIcon, EditIcon, UploadIcon } from "@/components/icons";
import { Link } from "react-router-dom";
import { Main } from "../../_components";

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

const ContactDetail = () => {
	return (
		<Main className="px-3">
			<header
				className="bg-grey-50 mx-auto mb-[24px] flex size-[110px] items-center justify-center
					rounded-[55px] text-center"
			>
				<IconBox icon="solar:user-bold" className="text-grey-700 size-12" />
			</header>
			<section className="mb-[36px] space-y-[24px] rounded-[16px] bg-white px-[12px] py-[24px]">
				<div className="space-y-[8px]">
					{details.map((detail) => (
						<div
							key={detail.detailCategory}
							className="border-grey-100 flex flex-wrap items-center justify-between gap-[12px]
								border-b border-solid pt-[5px] pb-[12px] text-[14px]"
						>
							<p className="text-grey-700 font-[400]">{detail.detailCategory}</p>
							<p className="font-medium">{detail.detailContent}</p>
						</div>
					))}
				</div>

				<Link
					to="/profile/qr-code"
					className="text-secondary flex items-center gap-[4px] text-[14px] font-normal"
				>
					Generate QR code <IconBox icon="quill:chevron-right" className="mt-[3px]" />
				</Link>
			</section>

			{actionButtons.map((items) => (
				<div
					key={items.text}
					className="bg-grey-50 text-primary mb-1 flex items-center gap-[8px] rounded-[8px] px-6
						py-[13px]"
				>
					{items.image}

					<Link to={items.path} className="text-[16px]">
						{items.text}
					</Link>
				</div>
			))}
		</Main>
	);
};

export default ContactDetail;
