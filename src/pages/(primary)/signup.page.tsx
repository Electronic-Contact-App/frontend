import { IconBox } from "@/components/common";
import { Button, Form } from "@/components/ui";
import { useForm } from "react-hook-form";
import { Main } from "./_components";

function SignupPage() {
	const methods = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			confirmPassword: "",
		},
	});

	const { control } = methods;

	return (
		<Main className="gap-8">
			<header>
				<h1 className="text-[24px] font-bold">Welcome to Chacha</h1>

				<p className="mt-2 text-[15px] leading-[20px] text-grey-500">
					Please provide your information to enjoy a seamless experience.
				</p>
			</header>

			<section className="flex flex-col gap-6">
				<article className="flex flex-col gap-5">
					<Button theme="ghost" className="gap-6 font-medium text-grey-800">
						<IconBox icon="devicon:google" className="size-6" />
						Sign Up with Google
					</Button>

					<Button theme="ghost" className="gap-6 font-medium text-grey-800">
						<IconBox icon="devicon:apple" className="size-6" />
						Sign Up with Apple
					</Button>

					<div className="flex items-center justify-center gap-2 text-grey-300">
						<span className="inline-block h-px w-full bg-grey-300" />
						Or
						<span className="inline-block h-px w-full bg-grey-300" />
					</div>
				</article>

				<Form.Root methods={methods} className="gap-4">
					<Form.Item control={control} name="firstName" className="gap-3">
						<Form.Label className="font-medium">First name</Form.Label>
						<Form.Input
							className="h-[44px] rounded-[8px] border border-grey-200 px-[10px]
								placeholder:text-grey-600"
							placeholder="Enter your first name"
						/>
					</Form.Item>

					<Form.Item control={control} name="lastName" className="gap-3">
						<Form.Label className="font-medium">Last name</Form.Label>
						<Form.Input
							className="h-[44px] rounded-[8px] border border-grey-200 px-[10px]
								placeholder:text-grey-600"
							placeholder="Enter your last name"
						/>
					</Form.Item>

					<Form.Item control={control} name="email" className="gap-3">
						<Form.Label className="font-medium">Email</Form.Label>
						<Form.Input
							type="email"
							className="h-[44px] rounded-[8px] border border-grey-200 px-[10px]
								placeholder:text-grey-600"
							placeholder="Enter your email address"
						/>
					</Form.Item>

					<Form.Item control={control} name="email" className="gap-3">
						<Form.Label className="font-medium">Phone number</Form.Label>

						<Form.Input
							type="email"
							className="h-[44px] rounded-[8px] border border-grey-200 px-[10px]
								placeholder:text-grey-600"
							placeholder="Enter your email address"
						/>
					</Form.Item>
				</Form.Root>
			</section>
		</Main>
	);
}

export default SignupPage;
