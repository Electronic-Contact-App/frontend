import { Main } from "../../_components";
import {
	createBusinessCard,
	scanQrCode,
	shareDocuments,
	viewQrCode,
	shareContactTemporarily,
	ViewContacts,
} from "@/assets";
import { VideoIcon } from "@/components/icons";
import { Link } from "react-router-dom";

function ContactPage() {
	return (
		<Main>
			<div className="text-center">
				<p>Contact Sharing</p>
			</div>

			<div className="mt-5 flex h-[90px] w-full items-center justify-between rounded bg-grey-100 px-5">
				<div>
					<p>View Contacts</p>
				</div>
				<div className="h-[72px] w-[92px]">
					<img src={ViewContacts} alt="" className="size-full" />
				</div>
			</div>
			<div className="mt-5 flex h-[90px] w-full items-center justify-between rounded bg-grey-100 px-5">
				<div>
					<p>Scan QR code</p>
				</div>
				<div className="h-[72px] w-[92px]">
					<img src={scanQrCode} alt="" className="size-full" />
				</div>
			</div>
			<Link to={`virtual-business-card`}>
				<div className="mt-5 flex h-[90px] w-full items-center justify-between rounded bg-grey-100 px-5">
					<div>
						<p>Share your virtual business cards</p>
					</div>
					<div className="h-[72px] w-[92px]">
						<img src={createBusinessCard} alt="" className="size-full" />
					</div>
				</div>
			</Link>
			<div className="mt-5 flex h-[90px] w-full items-center justify-between rounded bg-grey-100 px-5">
				<div>
					<p>Share your document</p>
				</div>
				<div className="h-[72px] w-[92px]">
					<img src={shareDocuments} alt="" className="size-full" />
				</div>
			</div>
			<div className="mt-5 flex h-[90px] w-full items-center justify-between rounded bg-grey-100 px-5">
				<div>
					<p>Share your contact</p>
				</div>
				<div className="h-[72px] w-[92px]">
					<img src={shareContactTemporarily} alt="" className="size-full" />
				</div>
			</div>
			<div className="mt-5 flex h-[90px] w-full items-center justify-between rounded bg-grey-100 px-5">
				<div>
					<p>View your QR code </p>
				</div>
				<div className="h-[72px] w-[92px]">
					<img src={viewQrCode} alt="" className="size-full" />
				</div>
			</div>

			<Link to={`how-to-tutorial`}>
				<div className="flex gap-3 pt-3">
					<VideoIcon className="rounded bg-grey-100 p-0.5" />
					<p className="text-[#DA700A]">Tutorial: How to share contact temporarily</p>
				</div>
			</Link>
		</Main>
	);
}

export default ContactPage;
