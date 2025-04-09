import {
	ViewContacts,
	createBusinessCard,
	scanQrCode,
	shareContactTemporarily,
	shareDocuments,
	viewQrCode,
} from "@/assets";
import { Image } from "@/components/common";
import { VideoIcon } from "@/components/icons";
import { Link } from "react-router-dom";
import { Main } from "../../_components";

function ContactPage() {
	return (
		<Main>
			<div className="text-center">
				<p>Contact Sharing</p>
			</div>

			<div className="bg-grey-100 mt-5 flex h-[90px] w-full items-center justify-between rounded-sm px-5">
				<div>
					<p>View Contacts</p>
				</div>
				<div className="h-[72px] w-[92px]">
					<Image src={ViewContacts} layout="fullWidth" alt="" className="size-full" />
				</div>
			</div>
			<div className="bg-grey-100 mt-5 flex h-[90px] w-full items-center justify-between rounded-sm px-5">
				<div>
					<p>Scan QR code</p>
				</div>
				<div className="h-[72px] w-[92px]">
					<Image src={scanQrCode} alt="" layout="fullWidth" className="size-full" />
				</div>
			</div>
			<Link to={`virtual-business-card`}>
				<div
					className="bg-grey-100 mt-5 flex h-[90px] w-full items-center justify-between rounded-sm
						px-5"
				>
					<div>
						<p>Share your virtual business cards</p>
					</div>
					<div className="h-[72px] w-[92px]">
						<Image src={createBusinessCard} alt="" layout="fullWidth" className="size-full" />
					</div>
				</div>
			</Link>
			<div className="bg-grey-100 mt-5 flex h-[90px] w-full items-center justify-between rounded-sm px-5">
				<div>
					<p>Share your document</p>
				</div>
				<div className="h-[72px] w-[92px]">
					<Image src={shareDocuments} alt="" layout="fullWidth" className="size-full" />
				</div>
			</div>
			<div className="bg-grey-100 mt-5 flex h-[90px] w-full items-center justify-between rounded-sm px-5">
				<div>
					<p>Share your contact</p>
				</div>
				<div className="h-[72px] w-[92px]">
					<Image src={shareContactTemporarily} alt="" layout="fullWidth" className="size-full" />
				</div>
			</div>
			<div className="bg-grey-100 mt-5 flex h-[90px] w-full items-center justify-between rounded-sm px-5">
				<div>
					<p>View your QR code </p>
				</div>
				<div className="h-[72px] w-[92px]">
					<Image src={viewQrCode} alt="" layout="fullWidth" className="size-full" />
				</div>
			</div>

			<Link to={`how-to-tutorial`}>
				<div className="flex gap-3 pt-3">
					<VideoIcon className="bg-grey-100 rounded-sm p-0.5" />
					<p className="text-[#DA700A]">Tutorial: How to share contact temporarily</p>
				</div>
			</Link>
		</Main>
	);
}

export default ContactPage;
