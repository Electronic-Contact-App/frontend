import { Tabs } from "@/components/ui";
import { useLocation } from "@zayne-labs/toolkit/react";
import { Link } from "react-router-dom";

function TabNavigation() {
	const [pathname, { push }] = useLocation((state) => state.pathname);

	const handleTabChange = (value: string) => {
		push(value === "contact" ? "/profile" : `/profile/${value}`);
	};

	return (
		<header className="flex flex-col gap-6">
			<div className="relative flex items-center justify-center">
				<h1 className="text-[18px] font-medium text-white">Profile</h1>

				<Link to="/history" className="absolute right-0 text-right text-[14px] text-white">
					View history
				</Link>
			</div>

			<section>
				<Tabs.Root value={pathname.split("/")[2] ?? "contact"} onValueChange={handleTabChange}>
					<Tabs.List className="bg-grey-50 w-full justify-between rounded-[16px] px-3 py-1">
						<Tabs.Trigger
							value="contact"
							className="text-grey-700 data-[state=active]:text-primary rounded-[8px] px-3 py-[6px]
								text-[13.5px] font-medium data-[state=active]:bg-white"
						>
							<Link to="/profile">Contact Details</Link>
						</Tabs.Trigger>

						<Tabs.Trigger
							value="business-card"
							className="text-grey-700 data-[state=active]:text-primary rounded-[8px] px-3 py-[6px]
								text-[13.5px] font-medium data-[state=active]:bg-white"
						>
							<Link to="/profile/business-card">Business Card</Link>
						</Tabs.Trigger>

						<Tabs.Trigger
							value="document"
							className="text-grey-700 data-[state=active]:text-primary rounded-[8px] px-3 py-[6px]
								text-[13.5px] font-medium data-[state=active]:bg-white"
						>
							<Link to="/profile/document">Document</Link>
						</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>
			</section>
		</header>
	);
}

export default TabNavigation;
