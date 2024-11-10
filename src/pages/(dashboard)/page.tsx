import {
	eventCheckIn,
	placeholderProfile,
	scanQrCode,
	shareBusinessCard,
	shareContactTemporarily,
	shareDocuments,
	viewQrCode,
} from "@/assets";
import { IconBox, Image, getElementList } from "@/components/common";
import { ArrowIcon, NotificationIcon, ScanIcon } from "@/components/icons";
import SearchIcon from "@/components/icons/SearchIcon";
import { Form } from "@/components/ui";
import { Main } from "../_components";

const quickActions = [
	{
		title: "Scan QR code",
		image: scanQrCode,
	},
	{
		title: "Share virtual business card",
		image: shareBusinessCard,
	},
	{
		title: "Share your documents",
		image: shareDocuments,
	},
	{
		title: "Share contact temporarily",
		image: shareContactTemporarily,
	},
	{
		title: "Event check-In",
		image: eventCheckIn,
	},
	{
		title: "View contact QR code",
		image: viewQrCode,
	},
];

function HomePage() {
	const [QuickActionsList] = getElementList();

	return (
		<Main className="gap-6">
			<header className="flex items-center justify-between">
				<section className="flex gap-2">
					<div className="size-12">
						<Image
							priority={true}
							layout="fullWidth"
							className="size-full"
							src={placeholderProfile}
							alt=""
						/>
					</div>

					<div className="flex flex-col gap-1">
						<h1 className="font-medium">Welcome, Miracle</h1>
						<p className="text-[12px]">anosikemiracle@gmail.com</p>
					</div>
				</section>

				<section className="flex gap-4">
					<ScanIcon />
					<NotificationIcon />
				</section>
			</header>
			<section>
				<Form.Item withWrapper={false} name="">
					<Form.InputGroup
						className="rounded-[40px] bg-white px-6 py-2
							shadow-[0_1px_4px_hsl(240,4%,5%,0.05),_0_1px_4px_hsl(240,4%,5%,0.1)]"
					>
						<Form.InputLeftItem>
							<SearchIcon />
						</Form.InputLeftItem>

						<Form.InputPrimitive type="search" />
					</Form.InputGroup>
				</Form.Item>
			</section>
			<section className="flex flex-col gap-3">
				<article
					className="flex h-[72px] flex-col justify-between rounded-[8px] border-[0.5px]
						border-blue-200 bg-blue-50 px-3 py-2"
				>
					<div className="flex gap-2">
						<IconBox icon="solar:user-linear" className="size-6" />
						<p className="text-[14px]">Complete your profile</p>
					</div>
					<div className="flex gap-2 self-end">
						<p className="text-[14px] text-primary">Go to profile</p>
						<ArrowIcon className="rotate-180 text-primary" />
					</div>
				</article>
			</section>

			<section className="mt-3 flex flex-col gap-4">
				<h2 className="font-medium">Quick Actions</h2>

				<QuickActionsList
					className="grid grid-cols-2 gap-4"
					each={quickActions}
					render={(action) => (
						<li
							key={action.title}
							className="flex h-[90px] items-center justify-between rounded-[8px] bg-grey-50 px-3
								py-4"
						>
							<p className="text-[14px]">{action.title}</p>

							<Image src={action.image} alt="" width={50} height={55} />
						</li>
					)}
				/>
			</section>
		</Main>
	);
}

export default HomePage;
