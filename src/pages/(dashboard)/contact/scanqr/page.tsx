import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Main } from "@/pages/_components";
import { Outlet } from "react-router-dom";
import { QRcode } from "@/assets";

function ScanQRCodepage() {
	return (
		<Main>
			<div className="flex w-full items-center">
				<Button
					unstyled={true}
					className="flex size-11 items-center justify-center self-start rounded-full bg-grey-100"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button>
				<p className="w-full text-center">Scan QR code</p>
				<Outlet />
			</div>

			<div className="mt-4 flex flex-col items-center">
				<p>Kindly scan the QR code to see the person contact details</p>
				<div
					className="mt-9 flex h-[240px] w-[353px] items-center justify-center rounded-[16px]
						bg-grey-100"
				>
					<div className="h-[225px] w-[282px]">
						<img src={QRcode} className="w-full" alt="QRCode" />
					</div>
				</div>
			</div>
		</Main>
	);
}
export default ScanQRCodepage;
