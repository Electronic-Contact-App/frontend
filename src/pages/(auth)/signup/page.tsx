import { IconBox } from "@/components/common";
import { Button, Form } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "../../_components";

type SignupFormValues = {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
};

function SignupPage() {
	const navigate = useNavigate();

	const methods = useForm<SignupFormValues>({
		defaultValues: {
			first_name: "",
			last_name: "",
			username: "",
			email: "",
			phone: "",
			password: "",
			confirmPassword: "",
		},
	});

	const { control } = methods;

	const onSubmit = async (data: SignupFormValues) => {
		await callBackendApi("/auth/signup", {
			method: "POST",
			body: data,

			onSuccess: () => void navigate("/2fa/verify"),
		});
	};

	return (
		<Main className="gap-8">
			<header>
				<h1 className="text-[24px] font-bold">Welcome to Chacha</h1>

				<p className="text-grey-500 mt-2 text-[15px] leading-[20px]">
					Please provide your information to enjoy a seamless experience.
				</p>
			</header>

			<section className="flex flex-col gap-6">
				<div className="flex flex-col gap-3">
					<h3 className="text-[16px] font-medium">Sign in with:</h3>

					<article className="flex flex-col gap-5">
						<div className="flex gap-4">
							<Button theme="ghost" className="h-[42px]">
								<IconBox icon="devicon:google" className="size-6" />
							</Button>
							<Button theme="ghost" className="h-[42px]">
								<IconBox icon="entypo-social:linkedin-with-circle" className="size-6" />
							</Button>
							<Button theme="ghost" className="h-[42px]">
								<IconBox icon="entypo-social:facebook-with-circle" className="size-6" />
							</Button>
						</div>

						<div className="text-grey-300 flex items-center justify-center gap-2">
							<span className="bg-grey-300 inline-block h-px w-full" />
							Or
							<span className="bg-grey-300 inline-block h-px w-full" />
						</div>
					</article>
				</div>

				<Form.Root
					methods={methods}
					className="gap-4"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Item control={control} name="first_name" className="gap-3">
						<Form.Label className="font-medium">First name</Form.Label>
						<Form.Input
							className="border-grey-200 placeholder:text-grey-600 h-11 rounded-[8px] border
								px-[10px]"
							placeholder="Enter your first name"
						/>
					</Form.Item>

					<Form.Item control={control} name="last_name" className="gap-3">
						<Form.Label className="font-medium">Last name</Form.Label>
						<Form.Input
							className="border-grey-200 placeholder:text-grey-600 h-11 rounded-[8px] border
								px-[10px]"
							placeholder="Enter your last name"
						/>
					</Form.Item>

					<Form.Item control={control} name="username" className="gap-3">
						<Form.Label className="font-medium">User name</Form.Label>
						<Form.Input
							className="border-grey-200 placeholder:text-grey-600 h-11 rounded-[8px] border
								px-[10px]"
							placeholder="Enter your username"
						/>
					</Form.Item>

					<Form.Item control={control} name="email" className="gap-3">
						<Form.Label className="font-medium">Email</Form.Label>
						<Form.Input
							type="email"
							className="border-grey-200 placeholder:text-grey-600 h-11 rounded-[8px] border
								px-[10px]"
							placeholder="Enter your email address"
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

					<Form.Item control={control} name="password" className="gap-3">
						<Form.Label className="font-medium">Password</Form.Label>

						<Form.Input
							type="password"
							classNames={{
								inputGroup: `border-grey-200 placeholder:text-grey-600 h-11 rounded-[8px] border
								px-[10px]`,
								eyeIcon: "text-grey-600",
							}}
							placeholder="Enter your password"
						/>

						<article className="text-grey-800 text-[12px]">
							<p>Password must have: </p>

							<div className="mt-2 flex flex-wrap gap-2">
								<span className="border-grey-800 rounded-[24px] border px-2 py-[5px]">
									at least 1 special character
								</span>
								<span className="border-grey-800 rounded-[24px] border px-2 py-[5px]">
									8 characters min
								</span>
							</div>
						</article>
					</Form.Item>

					<Form.Item control={control} name="confirmPassword" className="gap-3">
						<Form.Label className="font-medium">Confirm password</Form.Label>

						<Form.Input
							type="password"
							classNames={{
								inputGroup: `border-grey-200 placeholder:text-grey-600 h-11 rounded-[8px] border
								px-[10px]`,
								eyeIcon: "text-grey-600",
							}}
							placeholder="Re-enter your password"
						/>
					</Form.Item>

					<div className="mt-4 flex flex-col items-center gap-7">
						<Button
							type="submit"
							isLoading={methods.formState.isSubmitting}
							isDisabled={!methods.formState.isValid}
							disabled={!methods.formState.isValid || methods.formState.isSubmitting}
						>
							Sign up
						</Button>

						<p className="flex gap-1">
							Already have an account?
							<Link to="/signin" className="text-primary font-medium">
								Sign In
							</Link>
						</p>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default SignupPage;
