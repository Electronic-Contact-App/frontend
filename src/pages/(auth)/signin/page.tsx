import { IconBox } from "@/components/common";
import { Button, Form } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "../../_components";

type SignupFormValues = {
	user_identifier: "";
	password: "";
};

const SigninPage = () => {
	const navigate = useNavigate();

	const methods = useForm<SignupFormValues>({
		defaultValues: {
			user_identifier: "",
			password: "",
		},
	});

	const { control } = methods;

	const onSubmit = async (data: SignupFormValues) => {
		await callBackendApi("/auth/login", {
			method: "POST",
			body: data,

			onSuccess: () => void navigate("/"),
		});
	};

	return (
		<Main className="space-y-[24px] max-md:min-w-[380px]">
			<h1 className="text-[24px] font-bold">Sign in to Chacha</h1>

			<section>
				<p className="pb-[12px] text-[16px] font-medium">Sign in with:</p>

				<div className="mb-[20px] flex gap-4">
					<Button theme="ghost" className="h-[42px]">
						<IconBox icon="devicon:google" className="size-[24px]" />
					</Button>
					<Button theme="ghost" className="h-[42px]">
						<IconBox icon="entypo-social:linkedin-with-circle" className="size-[24px]" />
					</Button>
					<Button theme="ghost" className="h-[42px]">
						<IconBox icon="entypo-social:facebook-with-circle" className="size-[24px]" />
					</Button>
				</div>

				<div className="flex items-center justify-center gap-2 text-grey-300">
					<span className="inline-block h-px w-full bg-grey-300" />
					Or
					<span className="inline-block h-px w-full bg-grey-300" />
				</div>
			</section>

			<Form.Root
				methods={methods}
				className="gap-4"
				onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
			>
				<Form.Item control={control} name="user_identifier" className="space-y-3">
					<Form.Label className="font-medium">Email address/Username</Form.Label>
					<Form.Input
						className="h-11 w-full rounded-[8px] border border-grey-200 px-[10px]
							placeholder:text-grey-600"
						placeholder="Enter your email address or username"
					/>
				</Form.Item>

				<Form.Item control={control} name="password" className="space-y-3">
					<Form.Label className="font-medium">Password</Form.Label>
					<Form.Input
						type="password"
						classNames={{
							inputGroup: `h-11 rounded-[8px] border border-grey-200 px-[10px]
							placeholder:text-grey-600`,
							eyeIcon: "text-grey-600",
						}}
						placeholder="Enter your password"
					/>
				</Form.Item>

				<div className="flex items-center justify-between">
					<Form.Item className="flex-row items-center gap-[8px]" name="">
						<Form.Input
							className="size-6 w-[18px] rounded-[8px] border border-grey-200 px-[10px]
								accent-[#DA700A]"
							type="checkbox"
						/>
						<Form.Label className="font-medium">Remember me</Form.Label>
					</Form.Item>

					<Link to="" className="text-[14px] font-normal text-[#0057B5]">
						Forgot Password?
					</Link>
				</div>

				<section className="pt-[98px]">
					<Button
						type="submit"
						isLoading={methods.formState.isSubmitting}
						isDisabled={!methods.formState.isValid}
						disabled={!methods.formState.isValid || methods.formState.isSubmitting}
					>
						Sign in
					</Button>

					<p className="mt-5 text-center text-[15px] font-normal">
						Don’t have an account?
						<Link to="/signup" className="text-base font-medium text-[#0057B5]">
							Sign up
						</Link>
					</p>
				</section>
			</Form.Root>
		</Main>
	);
};

export default SigninPage;
