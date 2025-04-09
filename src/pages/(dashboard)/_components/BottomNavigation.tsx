import { IconBox, getElementList } from "@/components/common";
import { NavLink } from "react-router-dom";

const naviationLinks = [
	{
		title: "Home",
		icon: "solar:home-angle-2-bold",
		href: "/",
	},
	{
		title: "Contact",
		icon: "solar:share-circle-linear",
		href: "/contact",
	},
	{
		title: "Event",
		icon: "solar:routing-2-linear",
		href: "/event",
	},
	{
		title: "Chat",
		icon: "majesticons:chats-2-line",
		href: "/chat",
	},
	{
		title: "Profile",
		icon: "solar:user-linear",
		href: "/profile",
	},
];

function BottomNavigation() {
	const [NavigationList] = getElementList();

	return (
		<nav className="bg-background sticky bottom-0 px-5 pt-4 pb-5">
			<NavigationList
				className="flex justify-between gap-5 self-end"
				each={naviationLinks}
				render={(link) => (
					<li key={link.href}>
						<NavLink
							to={link.href}
							className="text-grey-800 [&.active]:text-primary flex flex-col items-center gap-2"
						>
							<span className="block size-6">
								<IconBox icon={link.icon} className="size-full" />
							</span>

							<p className="text-[14px]">{link.title}</p>
						</NavLink>
					</li>
				)}
			/>
		</nav>
	);
}

export default BottomNavigation;
