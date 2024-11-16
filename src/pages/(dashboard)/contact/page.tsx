import { Button, Drawer, Form } from "@/components/ui";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Main } from "../../_components";

function ContactPage() {
	const methods = useForm();

	return (
		<Main>
			<Drawer.Root>
				<Drawer.Trigger>Open</Drawer.Trigger>

				<Drawer.Content withHandle={false} className="max-w-full rounded-t-[16px] px-5 pb-5 pt-6">
					<Drawer.Header className="flex flex-col gap-6 p-0">
						<Drawer.Title className="flex items-center self-center">
							<DotLottieReact
								className="w-[80px]"
								src="https://lottie.host/0cded368-9526-48ae-80a7-589cb589a4af/NOXTo43Q5h.lottie"
								loop={true}
								autoplay={true}
							/>
							<p className="text-[18px] font-medium">Share temporarily</p>
						</Drawer.Title>

						<Drawer.Description className="flex justify-between">
							<p className="text-grey-700">Choose what you want to share</p>

							<Link to="#" className="text-[14px] text-secondary underline underline-offset-[3px]">
								Select all
							</Link>
						</Drawer.Description>
					</Drawer.Header>

					<Form.Root methods={methods} className="mt-4 gap-4">
						<Form.Item
							name=""
							className="flex-row items-center justify-between rounded-[8px] border border-grey-100
								p-[10px]"
						>
							<Form.Label>Name</Form.Label>

							<Form.Input
								type="checkbox"
								className="size-[18px] rounded-[2px] border-2 border-grey-600 accent-primary"
							/>
						</Form.Item>
						<Form.Item
							name=""
							className="flex-row items-center justify-between rounded-[8px] border border-grey-100
								p-[10px]"
						>
							<Form.Label>Email</Form.Label>

							<Form.Input
								type="checkbox"
								className="size-[18px] rounded-[2px] border-2 border-grey-600 accent-primary"
							/>
						</Form.Item>
						<Form.Item
							name=""
							className="flex-row items-center justify-between rounded-[8px] border border-grey-100
								p-[10px]"
						>
							<Form.Label>Link</Form.Label>

							<Form.Input
								type="checkbox"
								className="size-[18px] rounded-[2px] border-2 border-grey-600 accent-primary"
							/>
						</Form.Item>
					</Form.Root>

					<Drawer.Footer className="mt-9 flex flex-row justify-between gap-2">
						<Drawer.Close asChild={true}>
							<Button className="max-w-[172px]" theme="primary-inverted">
								Cancel
							</Button>
						</Drawer.Close>

						<Button className="max-w-[172px]">Share</Button>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer.Root>
		</Main>
	);
}

export default ContactPage;
