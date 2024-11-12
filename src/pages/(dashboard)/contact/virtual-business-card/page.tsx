import { createBusinessCard } from "@/assets";
import { IconBox } from "@/components/common";
import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Main } from "@/pages/_components";
import { Link, Outlet } from "react-router-dom";

function ShareBusinessCardPage() {
	return <Main>
		<div className="flex w-full items-center">
				<Button
					unstyled={true}
					className="flex size-11 items-center justify-center self-start rounded-full bg-grey-100"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button>
				<p className="w-full text-center">Business Card</p>
				<Outlet />
		</div>

		<div className="flex grow flex-col justify-between">
			<div className="mt-[25px] w-full justify-items-center">
				<img src={createBusinessCard} 
				alt="Business card svg" 
				className="h-[177px] w-[222px]"/>
				<p className="text-center">You don't have a business card
					<Link to={`/contact/virtual-business-card/create`}><span className="text-primary"> Create One</span></Link>
				</p>
			</div>

			<div className="mt-4 flex-col  gap-7">
				<Button type="submit" className="gap-2">
					<span className="flex size-6">
						<IconBox icon="iconoir:plus-circle" className="size-full" />
					</span>
					<p>Create card</p>
				</Button>
			</div>
		</div>
	</Main>;
}

export default ShareBusinessCardPage;
