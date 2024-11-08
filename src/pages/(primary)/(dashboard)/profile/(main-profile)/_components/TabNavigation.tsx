import { ArrowIcon } from "@/components/icons";
import { Button, Tabs } from "@/components/ui";
import { Link, useNavigate } from "react-router-dom";

function TabNavigation() {
	const navigate = useNavigate();

	const handleTabChange = (value: string) => {
		navigate(value === "contact" ? "/profile" : `/profile/${value}`);
	};

	return (
		<header className="flex flex-col gap-6">
			<section className="flex items-center justify-between">
				<Button
					unstyled={true}
					className="mt-4 flex size-11 items-center justify-center self-start rounded-full bg-grey-100"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button>

				<Link to="/history" className="text-[14px] text-white">
					View history
				</Link>
			</section>
			<section>
				<Tabs.Root defaultValue="contact" onValueChange={handleTabChange}>
					<Tabs.List className="w-full justify-between rounded-[16px] bg-grey-50 px-3 py-1">
						<Tabs.Trigger
							value="contact"
							className="rounded-[8px] px-3 py-[6px] text-[13.5px] font-medium text-grey-700
								data-[state=active]:bg-white data-[state=active]:text-primary"
						>
							Contact Details
						</Tabs.Trigger>

						<Tabs.Trigger
							value="business-card"
							className="rounded-[8px] px-3 py-[6px] text-[13.5px] font-medium text-grey-700
								data-[state=active]:bg-white data-[state=active]:text-primary"
						>
							Business Card
						</Tabs.Trigger>

						<Tabs.Trigger
							value="document"
							className="rounded-[8px] px-3 py-[6px] text-[13.5px] font-medium text-grey-700
								data-[state=active]:bg-white data-[state=active]:text-primary"
						>
							Document
						</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>
			</section>
		</header>
	);
}

export default TabNavigation;
