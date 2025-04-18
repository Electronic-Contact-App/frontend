import { IconBox } from "@/components/common";
import { Button, DropdownMenu, Form } from "@/components/ui";
import { Main } from "@/pages/_components";
import { useForm } from "react-hook-form";
import "react-international-phone/style.css";

type EditFormValues = {
	firstname: "";
	lastname: "";
	phone: "";
	email: "";
	about: "";
};

const EditProfile = () => {
	const methods = useForm<EditFormValues>({
		defaultValues: {
			firstname: "",
			lastname: "",
			phone: "",
			email: "",
			about: "",
		},
	});

	const { control } = methods;

	return (
		<Main className="">
			<header>
				<section className="relative mt-4 text-center">
					<h1>Edit Profile</h1>
				</section>
			</header>

			<div
				className="bg-grey-50 mx-auto mt-[44px] mb-[8px] flex size-[110px] items-center justify-center
					rounded-[55px] text-center"
			>
				<IconBox icon="solar:user-bold" className="text-grey-700 size-12" />
			</div>

			<Button
				unstyled={true}
				className="mx-auto w-fit rounded-[24px] bg-white px-[10px] py-[8px] text-[14px] font-medium"
			>
				Change Photo
			</Button>

			<Form.Root methods={methods} className="gap-4">
				<Form.Item control={control} name="firstname" className="space-y-3">
					<Form.Label className="font-medium">First name</Form.Label>
					<Form.Input
						className="border-grey-200 placeholder:text-grey-600 h-[44px] w-full rounded-[8px] border
							px-[10px]"
						placeholder="Enter new details"
					/>
				</Form.Item>

				<Form.Item control={control} name="lastname" className="space-y-3">
					<Form.Label className="font-medium">Last name</Form.Label>
					<Form.Input
						className="border-grey-200 placeholder:text-grey-600 h-[44px] w-full rounded-[8px] border
							px-[10px]"
						placeholder="Enter new details"
					/>
				</Form.Item>

				<div className="space-y-3">
					<Form.Item control={control} className="space-y-3" name="phone">
						<Form.Label className="font-medium">Phone number</Form.Label>
						<div className="border-grey-200 flex h-[44px] items-center rounded-[8px] border px-[10px]">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Button unstyled={true} className="flex cursor-pointer items-center gap-[2px]">
										<DropdownMenu.Label className="p-0 text-[14px] font-normal">
											Home
										</DropdownMenu.Label>
										<IconBox icon="solar:alt-arrow-down-outline" className="text-grey-700" />
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Item>Home</DropdownMenu.Item>
									<DropdownMenu.Item>Work</DropdownMenu.Item>
									<DropdownMenu.Item>Mobile</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
							<Form.Input
								type="tel"
								placeholder="+234 7062462466"
								className="flex-1 bg-transparent outline-hidden"
							/>
						</div>
					</Form.Item>

					{/* Add field button */}
					<div>
						<Button
							unstyled={true}
							className="text-primary flex items-center gap-[2.83px] font-medium"
						>
							<IconBox
								icon="solar:add-circle-outline"
								className="text-primary size-[13.33px] font-medium"
							/>
							Add Field
						</Button>
					</div>
				</div>

				<div className="space-y-3">
					<Form.Item control={control} className="space-y-3" name="email">
						<Form.Label className="font-medium">Email</Form.Label>

						<div className="border-grey-200 flex h-[44px] items-center rounded-[8px] border px-[10px]">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Button unstyled={true} className="flex cursor-pointer items-center gap-[2px]">
										<DropdownMenu.Label className="p-0 text-[14px] font-normal">
											Home
										</DropdownMenu.Label>
										<IconBox icon="solar:alt-arrow-down-outline" className="text-grey-700" />
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Item>Home</DropdownMenu.Item>
									<DropdownMenu.Item>Work</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
							<Form.Input
								type="email"
								placeholder="miraclegift@gmail.com"
								className="flex-1 bg-transparent outline-hidden"
							/>
						</div>
					</Form.Item>

					<div>
						<Button
							unstyled={true}
							className="text-primary flex items-center gap-[2.83px] font-medium"
						>
							<IconBox
								icon="solar:add-circle-outline"
								className="text-primary size-[13.33px] font-medium"
							/>
							Add Field
						</Button>
					</div>
				</div>

				<Form.Item control={control} name="about" className="space-y-3">
					<Form.Label className="font-medium">About</Form.Label>
					<Form.TextArea
						className="border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px] border
							p-[10px] focus:h-[134px] focus:leading-normal focus:placeholder:leading-normal"
						placeholder="Enter a brief info about yourself"
					/>
				</Form.Item>

				<Button disabled={true} theme={"primary"} className="mt-[36px]">
					Save Changes
				</Button>
			</Form.Root>
		</Main>
	);
};
export default EditProfile;
