import { QRcode } from "@/assets";
import { Image } from "@/components/common";
import { Main } from "@/pages/_components";

function ScanQRCodepage() {
	return (
		<Main>
			<header>
				<section className="relative flex items-center justify-center">
					<h1>Scan QR code</h1>
				</section>
			</header>

			<div className="mt-4 flex flex-col items-center">
				<p>Kindly scan the QR code to see the person contact details</p>
				<div
					className="bg-grey-100 mt-9 flex h-[240px] w-[353px] items-center justify-center
						rounded-[16px]"
				>
					<div className="h-[225px] w-[282px]">
						<Image layout="fullWidth" src={QRcode} className="w-full" alt="QRCode" />
					</div>
				</div>
			</div>
		</Main>
	);
}
export default ScanQRCodepage;
