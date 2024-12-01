import { QRcode } from "@/assets";
import { IconBox, Image } from "@/components/common";
import { CopyIcon, UploadIcon } from "@/components/icons";
// import { Link } from "react-router-dom";
import { Button, Drawer } from "@/components/ui";
import React, { useState } from "react";
import { Main } from "../../../_components";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { useForm } from "react-hook-form";

const details = [
	{
		detailCategory: "Name",
		detailContent: "Anosike Miracle",
	},
	{
		detailCategory: "Phone",
		detailContent: "07062462466",
	},
	{
		detailCategory: "Email",
		detailContent: "anosikemiracle@gmail.com",
	},
];

// const actionButtons = [
//   {
//     text: "Share temporarily",
//     image: <UploadIcon />,
//   },
//   {
//     text: "Share permanently",
//     image: <UploadIcon />,
//   },
//   {
//     text: "Copy contact",
//     image: <CopyIcon />,
//   },
// ];

function ContactDetailsPage() {
	const [showQRCode, setShowQRCode] = useState(false); // Toggle state

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

	//   const actionButtonsUI = actionButtons.map((items) => (
	//     <div
	//       key={items.text}
	//       className="mb-1 flex items-center gap-[8px] rounded-[8px] bg-[#F1F1F1] px-6 py-[13px] text-[#1F6EC9]"
	//     >
	//       {items.image}
	//       <Link to="/profile/edit" className="text-[16px]">
	//         {items.text}
	//       </Link>
	//     </div>
	//   ));

	const qrCodeView = (
		<div className="mt-4 flex flex-col items-center">
			<div className="w-[282px]">
				<Image src={QRcode} layout="fullWidth" className="w-full" alt="QRCode" />
			</div>
			<button
				onClick={() => setShowQRCode(false)} // Back to details
				className="mt-4 text-[14px] font-medium text-[#DA700A]"
				type="button"
			>
				Back to Details
			</button>
		</div>
	);

	// const methods = useForm();

	return (
		<Main className="px-3">
			<Drawer.Root>
				<div
					className="mx-auto mb-[24px] flex size-[110px] items-center justify-center rounded-[55px]
						bg-[#F1F1F1] text-center"
				>
					<IconBox icon="solar:user-bold" className="size-12 text-[#7F7F7F]" />
				</div>

				<section className="mb-[36px] space-y-[24px] rounded-[16px] bg-[#fff] px-[12px] py-[24px]">
					{showQRCode ? qrCodeView : <div className="space-y-[8px]">{detailsUI}</div>}
					{!showQRCode && (
						<button
							onClick={() => setShowQRCode(true)}
							className="flex items-center gap-[4px] text-[14px] font-normal text-[#DA700A]"
							type="button"
						>
							View contact QR code <IconBox icon="quill:chevron-right" className="mt-[3px]" />
						</button>
					)}
				</section>

				{/* {actionButtonsUI} */}

				<section>
					<div
						className="mb-1 flex items-center gap-[8px] rounded-[8px] bg-[#F1F1F1] px-6 py-[13px]
							text-[#1F6EC9]"
					>
						<Drawer.Trigger className="flex gap-[8px]">
							<UploadIcon />
							<p>Shar temporarily</p>
						</Drawer.Trigger>
					</div>
					<div
						className="mb-1 flex items-center gap-[8px] rounded-[8px] bg-[#F1F1F1] px-6 py-[13px]
							text-[#1F6EC9]"
					>
						<UploadIcon />
						<p>Shar parmenently</p>
					</div>
					<div
						className="mb-1 flex items-center gap-[8px] rounded-[8px] bg-[#F1F1F1] px-6 py-[13px]
							text-[#1F6EC9]"
					>
						<CopyIcon />
						<p>Edit contact</p>
					</div>
				</section>

				{/* <Drawer.Content className="max-w-full rounded-t-[16px] px-5 pb-5 pt-6">
					<Drawer.Header className="flex flex-col gap-6 p-0">
						<Drawer.Title className="flex items-center self-center">
							<DotLottieReact
								className="w-[80px]"
								src="https://lottie.host/0cded368-9526-48ae-80a7-589cb589a4af/NOXTo43Q5h.lottie"
								loop={true}
								autoplay={true}
							/>
							<p className="text-[18px] font-medium">Share temporarily</p>
						</Drawer.Title>

						<Drawer.Description className="flex justify-between">
							<p className="text-grey-700">Choose what you want to share</p>

							<Link to="#" className="text-[14px] text-secondary underline underline-offset-[3px]">
								Select all
							</Link>
						</Drawer.Description>
					</Drawer.Header>

					<Form.Root methods={methods} className="mt-4 gap-4">
						<Form.Item
							name=""
							className="flex-row items-center justify-between rounded-[8px] border border-grey-100
								p-[10px]"
						>
							<Form.Label>Name</Form.Label>

							<Form.Input
								type="checkbox"
								className="size-[18px] rounded-[2px] border-2 border-grey-600 accent-primary"
							/>
						</Form.Item>
						<Form.Item
							name=""
							className="flex-row items-center justify-between rounded-[8px] border border-grey-100
								p-[10px]"
						>
							<Form.Label>Phone number (home)</Form.Label>

							<Form.Input
								type="checkbox"
								className="size-[18px] rounded-[2px] border-2 border-grey-600 accent-primary"
							/>
						</Form.Item>
						<Form.Item
							name=""
							className="flex-row items-center justify-between rounded-[8px] border border-grey-100
								p-[10px]"
						>
							<Form.Label>Phone number (work)</Form.Label>

							<Form.Input
								type="checkbox"
								className="size-[18px] rounded-[2px] border-2 border-grey-600 accent-primary"
							/>
						</Form.Item>
						<Form.Item
							name=""
							className="flex-row items-center justify-between rounded-[8px] border border-grey-100
								p-[10px]"
						>
							<Form.Label>Email</Form.Label>

							<Form.Input
								type="checkbox"
								className="size-[18px] rounded-[2px] border-2 border-grey-600 accent-primary"
							/>
						</Form.Item>
						<Form.Item
							name=""
							className="flex-row items-center justify-between rounded-[8px] border border-grey-100
								p-[10px]"
						>
							<Form.Label>Job title</Form.Label>

							<Form.Input
								type="checkbox"
								className="size-[18px] rounded-[2px] border-2 border-grey-600 accent-primary"
							/>
						</Form.Item>
					</Form.Root>
					<Drawer.Footer className="mt-9 flex flex-row justify-between gap-2">
						<Drawer.Close asChild={true}>
							<Button className="max-w-[172px]" theme="primary-inverted">
								Cancel
							</Button>
						</Drawer.Close>

						<Button className="max-w-[172px]">Share</Button>
					</Drawer.Footer>
				</Drawer.Content> */}

				{/* <Drawer.Content className="max-w-full rounded-t-[16px] px-5 pb-5 pt-6">
					<Drawer.Header className="flex flex-col gap-6 p-0">
						<Drawer.Title className="flex items-center self-center">
							<DotLottieReact
								className="w-[80px]"
								src="https://lottie.host/0cded368-9526-48ae-80a7-589cb589a4af/NOXTo43Q5h.lottie"
								loop={true}
								autoplay={true}
							/>
							<p className="text-[18px] font-medium">QR Code</p>
						</Drawer.Title>

						<Drawer.Description className="flex justify-between">
							<p className="text-grey-700">Your name, phone number, home, email, LinkedIn information will be shared</p>

							<Link to="#" className="text-[14px] text-secondary underline underline-offset-[3px]">
								Select all
							</Link>
						</Drawer.Description>
					</Drawer.Header>

					<div className="flex flex-col items-center">
						<div
							className="mt-9 flex h-[240px] w-[353px] items-center justify-center rounded-[16px]
								bg-grey-100"
						>
							<div className="h-[225px] w-[282px]">
								<Image layout="fullWidth" src={QRcode} className="w-full" alt="QRCode" />
							</div>
						</div>
					</div>
					<p className="mt-2">Secured by end-to-end encryption</p>

					<Drawer.Footer className="mt-9 flex flex-row justify-between gap-2">
						<Drawer.Close asChild={true}>
							<Button className="max-w-[172px]" theme="primary-inverted">
								Cancel
							</Button>
						</Drawer.Close>

						<Button className="max-w-[172px]">Share</Button>
					</Drawer.Footer>
				</Drawer.Content> */}

				{/* <Drawer.Content className="max-w-full rounded-t-[16px] px-5 pb-5 pt-6">
					<Drawer.Header className="flex flex-col gap-6 p-0">
						<Drawer.Title className="flex items-center self-center">
							<DotLottieReact
								className="w-[80px]"
								src="https://lottie.host/0cded368-9526-48ae-80a7-589cb589a4af/NOXTo43Q5h.lottie"
								loop={true}
								autoplay={true}
							/>
							<p className="text-[18px] font-medium">Temporarily Share Contact</p>
						</Drawer.Title>

						<Drawer.Description className="flex flex-col items-start self-start">
							<h3 className="pb-1">Select duration</h3>
							<p className="text-grey-700">How long do you want this information to be shared?</p>
						</Drawer.Description>
					</Drawer.Header>

					<p className="mt-2">Secured by end-to-end encryption</p>

					<Drawer.Footer className="mt-9 flex flex-row justify-between gap-2">
						<Drawer.Close asChild={true}>
							<Button className="max-w-[172px]" theme="primary-inverted">
								Cancel
							</Button>
						</Drawer.Close>

						<Button className="max-w-[172px]">Share</Button>
					</Drawer.Footer>
				</Drawer.Content> */}

				<Drawer.Content className="max-w-full rounded-t-[16px] px-5 pb-5 pt-6">
					<Drawer.Header className="flex flex-col gap-6 p-0">
						<Drawer.Title className="flex items-center self-center">
							<p className="text-[18px] font-medium">Confirm</p>
						</Drawer.Title>

						<Drawer.Description className="flex flex-col items-start self-start">
							<p className="text-grey-700">
								The selected contact information will be shared for 30 mins.
							</p>
						</Drawer.Description>
					</Drawer.Header>

					<Drawer.Footer className="mt-2 flex flex-row justify-between gap-2">
						<Drawer.Close asChild={true}>
							<Button className="max-w-[172px]" theme="primary-inverted">
								Cancel
							</Button>
						</Drawer.Close>

						<Button className="max-w-[172px]">Share</Button>
					</Drawer.Footer>
					<p className="mt-2">Secured by end-to-end encryption</p>
				</Drawer.Content>
			</Drawer.Root>
		</Main>
	);
}

export default ContactDetailsPage;
