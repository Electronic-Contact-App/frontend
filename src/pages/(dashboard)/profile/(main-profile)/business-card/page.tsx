import { IconBox } from "@/components/common";
import { CopyIcon, EditIcon, UploadIcon } from "@/components/icons";
import { Main } from "@/pages/_components";
import { Link } from "react-router-dom";

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

const BusinessCard = () => {
	return (
		<Main className="px-3">
			<div
				className="bg-grey-50 mx-auto mb-[24px] flex size-[110px] items-center justify-center
					rounded-[55px] text-center"
			>
				<IconBox icon="solar:user-bold" className="text-grey-700 size-12" />
			</div>
			<section className="mb-[36px] space-y-[24px] rounded-[16px] bg-white px-[12px] py-[24px]">
				<div className="space-y-[8px]">
					<div
						className="flex flex-wrap items-center justify-between gap-[12px] border-b border-solid
							border-[#E7E7E7] pt-[5px] pb-[12px] text-[14px]"
					>
						<p className="text-grey-700 font-[400]">Name</p>
						<p className="font-medium">Anosike Miracle</p>
					</div>

					<div id="phone-box">
						<h3 className="mb-3 text-[14px] font-medium">Phone Number</h3>
						<div
							className="flex flex-wrap items-center justify-between gap-[12px] pb-[16px]
								text-[14px]"
						>
							<p className="text-grey-700 font-[400]">Home</p>
							<p className="font-medium">07062462466</p>
						</div>
						<div
							className="flex flex-wrap items-center justify-between gap-[12px] border-b
								border-solid border-[#E7E7E7] pb-[12px] text-[14px]"
						>
							<p className="text-grey-700 font-[400]">Work</p>
							<p className="font-medium">07062462466</p>
						</div>
					</div>

					<div
						className="flex flex-wrap items-center justify-between gap-[12px] border-b border-solid
							border-[#E7E7E7] pt-[5px] pb-[12px] text-[14px]"
					>
						<p className="text-grey-700 font-[400]">Email</p>
						<p className="font-medium">anosikemiracle@gmail.com</p>
					</div>

					<div
						className="flex flex-wrap items-center justify-between gap-[12px] border-b border-solid
							border-[#E7E7E7] pt-[5px] pb-[12px] text-[14px]"
					>
						<p className="text-grey-700 font-[400]">Job Title</p>
						<p className="font-medium">Accountant</p>
					</div>

					<div
						className="flex flex-wrap items-center justify-between gap-[12px] border-b border-solid
							border-[#E7E7E7] pt-[5px] pb-[12px] text-[14px]"
					>
						<p className="text-grey-700 font-[400]">About</p>
						<p className="font-medium">
							Hey there! I’m a creative UI/UX designer who loves turning ideas into engaging digital
							experiences. I’m all about simplicity, smart design, and making sure users enjoy every
							interaction. When I’m not designing, you’ll find me exploring new apps, playing games,
							or enjoying a good cup of coffee
						</p>
					</div>

					<div
						className="flex flex-wrap items-center justify-between gap-[12px] border-b border-solid
							border-[#E7E7E7] pt-[5px] pb-[12px] text-[14px]"
					>
						<p className="text-grey-700 font-[400]">Link</p>
						<p className="font-medium">www.boboo/urihhhie.com/</p>
					</div>

					<div id="social-box">
						<h3 className="mb-3 text-[14px] font-medium">Social Profile</h3>
						<div
							className="flex flex-wrap items-center justify-between gap-[12px] pb-[16px]
								text-[14px]"
						>
							<p className="text-grey-700 font-[400]">Linkedin</p>
							<p className="font-medium">www.linkedin/anosikemimi.com/</p>
						</div>
						<div
							className="flex flex-wrap items-center justify-between gap-[12px] border-b
								border-solid border-[#E7E7E7] pb-[12px] text-[14px]"
						>
							<p className="text-grey-700 font-[400]">Facebook</p>
							<p className="font-medium">www.facebook/anosikemimi.com/</p>
						</div>
					</div>
				</div>

				<Link
					to="qr-code"
					className="flex items-center gap-[4px] text-[14px] font-normal text-[#DA700A]"
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

export default BusinessCard;
