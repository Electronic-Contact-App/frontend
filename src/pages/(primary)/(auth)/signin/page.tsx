import { Button, Form } from "@/components/ui";

import { IconBox } from "@/components/common";
import { useForm } from "react-hook-form";
import { Main } from "../../_components";
import { Link } from "react-router-dom";

type SignupFormValues = {
	first_name: "";
	last_name: "";
	email: "";
	checkbox: "";
	password: "";
};

const SigninPage = () => {
	const methods = useForm<SignupFormValues>({
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			checkbox: "",
			password: "",
		},
	});

	const { control } = methods;

	return (
		<Main className="space-y-[24px] max-md:min-w-[380px]">
			{/*  */}

			<h1 className="text-[24px] font-bold">Sign in to Chacha</h1>

			<section>
				<p className="pb-[12px] text-[16px] font-medium">Sign in with:</p>

				<div className="mb-[20px] flex gap-4">
					<Button theme="ghost" className="">
						<IconBox icon="devicon:google" className="size-[24px]" />
					</Button>
					<Button theme="ghost">
						<IconBox icon="entypo-social:linkedin-with-circle" className="size-[24px]" />
					</Button>
					<Button theme="ghost">
						<IconBox icon="entypo-social:facebook-with-circle" className="size-[24px]" />
					</Button>
				</div>

				<div className="flex items-center justify-center gap-2 text-grey-300">
					<span className="inline-block h-px w-full bg-grey-300" />
					Or
					<span className="inline-block h-px w-full bg-grey-300" />
				</div>
			</section>

			<Form.Root methods={methods} className="gap-4">
				<Form.Item control={control} name="email" className="space-y-3">
					<Form.Label className="font-medium">Email address/Username</Form.Label>
					<Form.Input
						className="h-[44px] w-full rounded-[8px] border border-grey-200 px-[10px]
							placeholder:text-grey-600"
						placeholder="Enter your email address or username"
					/>
				</Form.Item>

				<Form.Item control={control} className="space-y-3" name="password">
					<Form.Label className="font-medium">Password</Form.Label>
					<Form.Input
						type="password"
						classNames={{
							inputGroup: `h-[44px] rounded-[8px] border border-grey-200 px-[10px]
							placeholder:text-grey-600`,
							eyeIcon: "text-grey-600",
						}}
						placeholder="Enter your password"
					/>
				</Form.Item>

				<div className="flex items-center justify-between">
					<Form.Item control={control} className="flex-row items-center gap-[8px]" name="checkbox">
						<Form.Input
							className="h-[44px] w-[18px] rounded-[8px] border border-grey-200 px-[10px]
								accent-[#DA700A]"
							type="checkbox"
						/>
						<Form.Label className="font-medium">Remember me</Form.Label>
					</Form.Item>

					<Link to="" className="text-[14px] font-normal text-[#0057B5]">
						Forgot Password?
					</Link>
				</div>
			</Form.Root>

			<section className="pt-[98px]">
				<Button className="text-base">Sign in</Button>
				<p className="mt-5 text-center text-[15px] font-normal">
					Don’t have an account?
					<Link to="/signup" className="text-base font-medium text-[#0057B5]">
						Sign up
					</Link>
				</p>
			</section>
		</Main>
	);
};

export default SigninPage;
