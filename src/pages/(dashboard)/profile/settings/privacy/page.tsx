import { IconBox, getElementList } from "@/components/common";
import { cnJoin } from "@/lib/utils/cn";
import { Main } from "@/pages/_components";
import { Link } from "react-router-dom";

const settingsLinks = [
	{
		link: "/profile/settings/privacy/profile",
		title: "Profile",
	},
	{
		link: "/profile/settings/privacy/business-card",
		title: "Business Card",
	},
	{
		link: "/profile/settings/privacy/document",
		title: "Document",
	},
];

function PrivacySettingsPage() {
	const [SettingsLinksList] = getElementList();

	return (
		<Main className="gap-6">
			<header>
				<section className="relative flex items-center justify-center">
					<h1>Privacy Settings</h1>
				</section>
			</header>

			<SettingsLinksList
				className="flex flex-col gap-3 rounded-[8px] bg-white p-3"
				each={settingsLinks}
				render={(item, index, array) => (
					<li key={item.link}>
						<Link
							to={item.link}
							className={cnJoin(
								"flex items-center justify-between",
								index !== array.length - 1 && "border-b-grey-100 border-b pt-1 pb-3"
							)}
						>
							<p>{item.title}</p>

							<span className="block size-5">
								<IconBox
									icon="material-symbols:chevron-right-rounded"
									className="text-grey-800 size-full"
								/>
							</span>
						</Link>
					</li>
				)}
			/>
		</Main>
	);
}

export default PrivacySettingsPage;
