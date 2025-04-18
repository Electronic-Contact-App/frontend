import { IconBox } from "@/components/common";
import { Button, Form } from "@/components/ui";
import { Main } from "@/pages/_components";
import { useState } from "react";
import { useForm } from "react-hook-form";

type EditFormValues = {
	firstname: "";
	lastname: "";
	phone: "";
	email: "";
	about: "";
	jobInfo: "";
	company: "";
};

const EditProfile = () => {
	const methods = useForm<EditFormValues>({
		defaultValues: {
			firstname: "",
			lastname: "",
			phone: "",
			email: "",
			about: "",
			jobInfo: "",
			company: "",
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
		<Main>
			<header>
				<section className="relative mt-4 text-center">
					<h1 className="">Edit business card</h1>
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

				<Form.Item control={control} className="space-y-3" name="phone">
					<Form.Label className="font-medium">Phone number</Form.Label>

					<div className="border-grey-200 flex h-[44px] items-center rounded-[8px] border px-[10px]">
						<p
							className="relative flex cursor-pointer items-center gap-[2px] pr-3 text-[14px]
								font-normal"
							onClick={toggleOptions("phone")}
						>
							Mobile
							<IconBox icon="solar:alt-arrow-down-outline" className="text-grey-700" />
							{isShow === "phone" && (
								<div
									className={`absolute top-full left-[-10px] w-[100px] bg-white px-3 py-2
									outline-hidden`}
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
							className="flex-1 bg-transparent outline-hidden"
						/>
					</div>
				</Form.Item>

				<Form.Item control={control} className="space-y-3" name="email">
					<Form.Label className="font-medium">Email</Form.Label>

					<div className="border-grey-200 flex h-[44px] items-center rounded-[8px] border px-[10px]">
						<p
							className="relative flex cursor-pointer items-center gap-[2px] pr-[12px] text-[14px]
								font-normal"
							onClick={toggleOptions("email")}
						>
							Home
							<IconBox icon="solar:alt-arrow-down-outline" className="text-grey-700" />
							{isShow === "email" && (
								<div
									className={`absolute top-full left-[-10px] w-[100px] bg-white px-3 py-2
									outline-hidden`}
								>
									<p className="py-2">Home</p>
									<p className="py-2">Work</p>
								</div>
							)}
						</p>
						<Form.Input
							type="email"
							placeholder="miraclegift@gmail.com"
							className="flex-1 bg-transparent outline-hidden"
						/>
					</div>
				</Form.Item>

				<Form.Item control={control} name="about" className="space-y-3">
					<Form.Label className="font-medium">About</Form.Label>
					<Form.TextArea
						className="border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px] border
							p-[10px] focus:h-[134px] focus:leading-normal focus:placeholder:leading-normal"
						placeholder="Enter a brief info about yourself"
					/>
				</Form.Item>

				<Form.Item control={control} name="jobInfo" className="space-y-3">
					<Form.Label className="font-medium">Job info</Form.Label>
					<Form.Input
						className="border-grey-200 placeholder:text-grey-600 h-[44px] w-full rounded-[8px] border
							px-[10px]"
						placeholder="Enter your job title"
					/>
				</Form.Item>

				<Form.Item control={control} name="company" className="space-y-3">
					<Form.Label className="font-medium">Company name</Form.Label>
					<Form.Input
						className="border-grey-200 placeholder:text-grey-600 h-[44px] w-full rounded-[8px] border
							px-[10px]"
						placeholder="Enter the name of your company"
					/>
				</Form.Item>

				<div>
					<Button unstyled={true} className="text-primary flex items-center gap-[2.83px] font-medium">
						<IconBox
							icon="solar:add-circle-outline"
							className="text-primary size-[13.33px] font-medium"
						/>
						Add Field
					</Button>
				</div>

				<Button disabled={true} theme={"primary"} className="mt-[36px]">
					Save Changes
				</Button>
			</Form.Root>
		</Main>
	);
};

export default EditProfile;
