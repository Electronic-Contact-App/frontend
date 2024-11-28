import { Button, Form } from "@/components/ui";
import { IconBox } from "@/components/common";
import { useForm } from "react-hook-form";
import { Main } from "@/pages/_components";
import "react-international-phone/style.css";
import { useState } from "react";

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
	// useState that tracks which dropdown is open. If open it closes by setting to null
	const [isShow, setIsShow] = useState<string | null>(null);

	const toggleOptions =
		(showId: string): React.MouseEventHandler<HTMLParagraphElement> =>
		() => {
			setIsShow(isShow === showId ? null : showId);
		};

	return (
		<Main className="">
			<section className="relative mt-4 text-center">
				{/* <Button
					unstyled={true}
					className="absolute -top-1/2 mx-1 flex size-11 items-center justify-center self-start
						rounded-full bg-grey-100"
					onClick={() => history.back()}
				>
					<ArrowIcon className="text-icon" />
				</Button> */}

				<h1>Edit Profile</h1>
			</section>

			<div
				className="mx-auto mb-[8px] mt-[44px] flex size-[110px] items-center justify-center
					rounded-[55px] bg-grey-50 text-center"
			>
				<IconBox icon="solar:user-bold" className="size-12 text-grey-700" />
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
						className="h-[44px] w-full rounded-[8px] border border-grey-200 px-[10px]
							placeholder:text-grey-600"
						placeholder="Enter new details"
					/>
				</Form.Item>

				<Form.Item control={control} name="lastname" className="space-y-3">
					<Form.Label className="font-medium">Last name</Form.Label>
					<Form.Input
						className="h-[44px] w-full rounded-[8px] border border-grey-200 px-[10px]
							placeholder:text-grey-600"
						placeholder="Enter new details"
					/>
				</Form.Item>

				<div className="space-y-3">
					<Form.Item control={control} className="space-y-3" name="phone">
						<Form.Label className="font-medium">Phone number</Form.Label>

						<div className="flex h-[44px] items-center rounded-[8px] border border-grey-200 px-[10px]">
							<p
								className="relative flex cursor-pointer items-center gap-[2px] pr-[12px]
									text-[14px] font-normal"
								onClick={toggleOptions("phone")}
							>
								Mobile
								<IconBox icon="solar:alt-arrow-down-outline" className="text-grey-700" />
								{isShow === "phone" && (
									<div
										className={`absolute left-[-10px] top-full w-[100px] bg-white px-3 py-2
										outline-none`}
									>
										<p className="py-2">Mobile</p>
										<p className="py-2">Home</p>
										<p className="py-2">Work</p>
									</div>
								)}
							</p>
							<Form.Input
								type="tel"
								placeholder="+234 7062462466"
								className="flex-1 bg-transparent outline-none"
							/>
						</div>
					</Form.Item>

					<div>
						<Button
							unstyled={true}
							className="flex items-center gap-[2.83px] font-medium text-primary"
						>
							<IconBox
								icon="solar:add-circle-outline"
								className="size-[13.33px] font-medium text-primary"
							/>
							Add Field
						</Button>
					</div>
				</div>

				<div className="space-y-3">
					<Form.Item control={control} className="space-y-3" name="email">
						<Form.Label className="font-medium">Email</Form.Label>

						<div className="flex h-[44px] items-center rounded-[8px] border border-grey-200 px-[10px]">
							<p
								className="relative flex cursor-pointer items-center gap-[2px] pr-[12px]
									text-[14px] font-normal"
								onClick={toggleOptions("email")}
							>
								Home
								<IconBox icon="solar:alt-arrow-down-outline" className="text-grey-700" />
								{isShow === "email" && (
									<div
										className={`absolute left-[-10px] top-full w-[100px] bg-white px-3 py-2
										outline-none`}
									>
										<p className="py-2">Home</p>
										<p className="py-2">Work</p>
									</div>
								)}
							</p>
							<Form.Input
								type="email"
								placeholder="miraclegift@gmail.com"
								className="flex-1 bg-transparent outline-none"
							/>
						</div>
					</Form.Item>

					<div>
						<Button
							unstyled={true}
							className="flex items-center gap-[2.83px] font-medium text-primary"
						>
							<IconBox
								icon="solar:add-circle-outline"
								className="size-[13.33px] font-medium text-primary"
							/>
							Add Field
						</Button>
					</div>
				</div>

				<Form.Item control={control} name="about" className="space-y-3">
					<Form.Label className="font-medium">About</Form.Label>
					<Form.TextArea
						className="h-[44px] rounded-[8px] border border-grey-200 p-[10px]
							placeholder:text-grey-600 focus:h-[134px] focus:leading-normal
							placeholder:focus:leading-normal"
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
