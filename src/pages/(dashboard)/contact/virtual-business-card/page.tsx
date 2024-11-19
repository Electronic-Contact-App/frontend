import { createBusinessCard } from "@/assets";
import { IconBox } from "@/components/common";
import { Button } from "@/components/ui";
import { Main } from "@/pages/_components";
import { Link } from "react-router-dom";

function ShareBusinessCardPage() {
	return (
		<Main>
			<header>
				<section className="relative flex items-center justify-center">
					<h1>Business Card</h1>
				</section>
			</header>

			<div className="flex grow flex-col justify-between">
				<div className="mt-[25px] w-full justify-items-center">
					<img src={createBusinessCard} alt="Business card svg" className="h-[177px] w-[222px]" />
					<p className="text-center">
						You don't have a business card
						<Link to={`/contact/virtual-business-card/create`}>
							<span className="text-primary"> Create One</span>
						</Link>
					</p>
				</div>

				<div className="mt-4 flex-col gap-7">
					<Link to={`/contact/virtual-business-card/create`}>
						<Button type="submit" className="gap-2">
							<span className="flex size-6">
								<IconBox icon="iconoir:plus-circle" className="size-full" />
							</span>
							<p>Create card</p>
						</Button>
					</Link>
				</div>
			</div>
		</Main>
	);
}

export default ShareBusinessCardPage;
