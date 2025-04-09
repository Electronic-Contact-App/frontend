import { IconBox } from "@/components/common";
import { Button, Form } from "@/components/ui";
import { Main } from "@/pages/_components";
import { useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type CreateVirtualCardFormValues = {
	name: string;
	phone: string;
	email: string;
	about: string;
	jobtitle: string;
	companyName: string;
	socialMedia: string;
};

function CreateBusinessCardFormPage() {
	const methods = useForm<CreateVirtualCardFormValues>({
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			about: "",
			jobtitle: "",
			companyName: "",
			socialMedia: "",
		},
	});

	const { control } = methods;

	return (
		<Main>
			<header>
				<section className="relative flex items-center justify-center">
					<h1>Create Business Card</h1>
				</section>
			</header>

			<section className="flex flex-col gap-6">
				<Form.Root methods={methods} className="gap-4">
					<div className="my-4 w-full justify-center justify-items-center">
						<div className="bg-grey-100 flex size-20 items-center justify-center rounded-full">
							<span className="flex size-12">
								<IconBox icon="tabler:user-filled" className="text-grey-400 size-full" />
							</span>
						</div>
						<p>Add Photo</p>
					</div>

					<Form.Item control={control} name="name" className="gap-3">
						<Form.Label className="font-medium">Name</Form.Label>
						<Form.Input
							className="border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px] border
								px-[10px]"
							placeholder="Enter your full name"
						/>
					</Form.Item>

					<Form.Item control={control} name="phone" className="gap-3">
						<Form.Label className="font-medium">Phone number</Form.Label>

						<Form.Controller
							render={({ field }) => (
								<PhoneInput
									defaultCountry="ng"
									forceDialCode={true}
									value={field.value}
									onChange={field.onChange}
									placeholder="70xxxxxxxx"
									className="[--react-international-phone-background-color:transparent]
										[--react-international-phone-border-color:var(--color-grey-200)]
										[--react-international-phone-border-radius:8px]
										[--react-international-phone-dropdown-item-background-color:white]
										[--react-international-phone-font-size:14px]
										[--react-international-phone-height:44px]
										[&_.react-international-phone-country-selector>button>div]:pl-[10px]
										[&_.react-international-phone-country-selector>button>div>img]:rounded-full
										[&>.react-international-phone-input]:w-full"
								/>
							)}
						/>
					</Form.Item>

					<Form.Item control={control} name="email" className="gap-3">
						<Form.Label className="font-medium">Email</Form.Label>
						<Form.Input
							type="email"
							className="border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px] border
								px-[10px]"
							placeholder="Enter your email address"
						/>
					</Form.Item>

					<Form.Item control={control} name="about" className="gap-3">
						<Form.Label className="font-medium">About</Form.Label>
						<Form.Input
							className="border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px] border
								px-[10px]"
							placeholder="Enter a brief info about yourself"
						/>
					</Form.Item>

					<Form.Item control={control} name="jobtitle" className="gap-3">
						<Form.Label className="font-medium">Job title</Form.Label>
						<Form.Input
							className="border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px] border
								px-[10px]"
							placeholder="Enter your job title"
						/>
					</Form.Item>

					<Form.Item control={control} name="companyName" className="gap-3">
						<Form.Label className="font-medium">Company name</Form.Label>
						<Form.Input
							className="border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px] border
								px-[10px]"
							placeholder="Enter the name of your company"
						/>
					</Form.Item>

					<div className="flex gap-2">
						<span className="text-primary flex size-6">
							<IconBox icon="iconoir:plus-circle" className="size-full" />
						</span>
						<p className="text-primary">Add field</p>
					</div>

					<div className="mt-4 flex flex-col items-center gap-7">
						<Button type="submit" className="bg-grey-300 gap-2">
							<span className="flex size-6">
								<IconBox icon="iconoir:plus-circle" className="size-full" />
							</span>
							<p>Create card</p>
						</Button>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default CreateBusinessCardFormPage;
