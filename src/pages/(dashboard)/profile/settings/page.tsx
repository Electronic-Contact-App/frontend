import { placeholderProfile } from "@/assets";
import { IconBox, Image, Show, getElementList } from "@/components/common";
import { AboutIcon, NotificationIcon, ScanIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { cnJoin } from "@/lib/utils/cn";
import { Main } from "@/pages/_components";
import { isString } from "@zayne-labs/toolkit/type-helpers";
import { Link } from "react-router-dom";

const settingsLinks = {
	first: [
		// {
		// 	link: "/profile/settings/profile",
		// 	icon: "solar:user-linear",
		// 	title: "Profile settings",
		// },

		{
			link: "/profile/settings/privacy",
			icon: "solar:lock-password-linear",
			title: "Privacy settings",
		},
		{
			link: "/profile/settings/security",
			icon: "solar:shield-minimalistic-outline",
			title: "Security settings",
		},
		{
			link: "/profile/settings/location",
			icon: "material-symbols:location-on-outline-rounded",
			title: "Location settings",
		},
		{
			link: "/profile/settings/notifications",
			icon: <NotificationIcon />,
			title: "Notification settings",
		},
	],

	second: [
		{
			link: "/profile/settings/contacts",
			icon: <NotificationIcon />,
			title: "View Contacts",
		},
		{
			link: "/profile/settings/nearby-people",
			icon: <NotificationIcon />,
			title: "People nearby",
		},
		{
			link: "/profile/settings/history",
			icon: "solar:history-2-linear",
			title: "View history",
		},
	],

	third: [
		{
			link: "/profile/settings/help",
			icon: "lsicon:circle-help-outline",
			title: "Help",
		},
		{
			link: "/profile/settings/about",
			icon: <AboutIcon />,
			title: "About us",
		},
		{
			link: null,
			icon: <IconBox icon="solar:logout-2-linear" className="size-full text-error" />,
			title: <p className="text-error">Log out</p>,
		},
		{
			link: null,
			icon: <IconBox icon="solar:trash-bin-trash-outline" className="size-full text-error" />,
			title: <p className="text-error">Delete account</p>,
		},
	],
};

function SettingsPage() {
	const [SettingsLinksList] = getElementList();

	return (
		<Main className="gap-4">
			<header className="flex flex-col gap-6">
				<section className="relative flex items-center justify-center">
					<h1>Settings</h1>
				</section>

				<section className="flex items-center justify-between bg-white p-3">
					<section className="flex gap-2">
						<div className="size-12">
							<Image
								priority={true}
								layout="fullWidth"
								className="size-full"
								src={placeholderProfile}
								alt=""
							/>
						</div>

						<div className="flex flex-col gap-1">
							<h1 className="font-medium">Welcome, Miracle</h1>
							<p className="text-[12px]">anosikemiracle@gmail.com</p>
						</div>
					</section>

					<section className="flex gap-4">
						<ScanIcon />
						<NotificationIcon />
					</section>
				</section>
			</header>

			<SettingsLinksList
				className="flex flex-col gap-3 rounded-[8px] bg-white p-3"
				each={settingsLinks.first}
				render={(item, index, array) => (
					<li key={item.link}>
						<Link
							to={item.link}
							className={cnJoin(
								"flex items-center justify-between",
								index !== array.length - 1 && "border-b border-b-grey-100 pb-3 pt-1"
							)}
						>
							<div className="flex items-center gap-3">
								<span className="block size-6">
									{isString(item.icon) ? (
										<IconBox icon={item.icon} className="size-full text-grey-700" />
									) : (
										item.icon
									)}
								</span>
								{isString(item.title) ? <p>{item.title}</p> : item.title}
							</div>

							<span className="block size-5">
								<IconBox
									icon="material-symbols:chevron-right-rounded"
									className="size-full text-grey-800"
								/>
							</span>
						</Link>
					</li>
				)}
			/>

			<SettingsLinksList
				className="flex flex-col gap-3 rounded-[8px] bg-white p-3"
				each={settingsLinks.second}
				render={(item, index, array) => (
					<li key={item.link}>
						<Link
							to={item.link}
							className={cnJoin(
								"flex items-center justify-between",
								index !== array.length - 1 && "border-b border-b-grey-100 pb-3 pt-1"
							)}
						>
							<div className="flex items-center gap-3">
								<span className="block size-6">
									{isString(item.icon) ? (
										<IconBox icon={item.icon} className="size-full text-grey-700" />
									) : (
										item.icon
									)}
								</span>
								{isString(item.title) ? <p>{item.title}</p> : item.title}
							</div>

							<span className="block size-5">
								<IconBox
									icon="material-symbols:chevron-right-rounded"
									className="size-full text-grey-800"
								/>
							</span>
						</Link>
					</li>
				)}
			/>

			<SettingsLinksList
				className="flex flex-col gap-3 rounded-[8px] bg-white p-3"
				each={settingsLinks.third}
				render={(item, index, array) => (
					<li key={index}>
						<Show when={isString(item.link)}>
							<Link
								to={item.link as string}
								className={cnJoin(
									"flex items-center justify-between",
									index !== array.length - 1 && "border-b border-b-grey-100 pb-3 pt-1"
								)}
							>
								<div className="flex items-center gap-3">
									<span className="block size-6">
										{isString(item.icon) ? (
											<IconBox icon={item.icon} className="size-full text-grey-700" />
										) : (
											item.icon
										)}
									</span>

									{isString(item.title) ? <p>{item.title}</p> : item.title}
								</div>

								<span className="block size-5">
									<IconBox
										icon="material-symbols:chevron-right-rounded"
										className="size-full text-grey-800"
									/>
								</span>
							</Link>

							<Show.OtherWise>
								<Button
									unstyled={true}
									className={cnJoin(
										"flex w-full items-center justify-between",
										index !== array.length - 1 && "border-b border-b-grey-100 pb-3 pt-1"
									)}
								>
									<div className="flex items-center gap-3">
										<span className="block size-6">
											{isString(item.icon) ? (
												<IconBox icon={item.icon} className="size-full text-grey-700" />
											) : (
												item.icon
											)}
										</span>

										{isString(item.title) ? <p>{item.title}</p> : item.title}
									</div>

									<span className="block size-5">
										<IconBox
											icon="material-symbols:chevron-right-rounded"
											className="size-full text-grey-800"
										/>
									</span>
								</Button>
							</Show.OtherWise>
						</Show>
					</li>
				)}
			/>
		</Main>
	);
}

export default SettingsPage;
