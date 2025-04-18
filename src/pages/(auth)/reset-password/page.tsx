import { IconBox } from "@/components/common";
import { Button, Form } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { useForm } from "react-hook-form";
import "react-international-phone/style.css";
import { Main } from "../../_components";

type resetFormValues = {
	password: string;
	confirmPassword: string;
};

function ResetPasswordPage() {
	const methods = useForm<resetFormValues>({
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const { control } = methods;

	const onSubmit = async (data: resetFormValues) => {
		const result = await callBackendApi("/auth/signup", {
			method: "POST",
			body: data,
		});

		console.info(result);
	};

	return (
		<Main className="gap-8">
			<header>
				<h1 className="text-[24px] font-bold">Reset Password</h1>

				<p className="text-grey-500 mt-2 text-[15px] leading-[20px]">
					Create a new password you can remember
				</p>
			</header>

			<section className="flex flex-col gap-6">
				<Form.Root
					methods={methods}
					className="gap-4"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Item control={control} name="password" className="gap-3">
						<Form.Label className="font-medium">Password</Form.Label>

						<Form.Input
							type="password"
							classNames={{
								inputGroup: `border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px]
								border px-[10px]`,
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
								inputGroup: `border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px]
								border px-[10px]`,
								eyeIcon: "text-grey-600",
							}}
							placeholder="Re-enter your password"
						/>
					</Form.Item>

					<div className="flex items-center gap-2">
						<span className="bg-grey-100 grid size-8 place-items-center rounded-full">
							<IconBox
								icon="material-symbols:shield-lock-outline-rounded"
								className="size-5 text-[hsl(137,99%,39%)]"
							/>
						</span>

						<p className="text-[14px]">Secured by encryption</p>
					</div>

					<div className="mt-4 flex flex-col items-center gap-7">
						<Button type="submit">Reset Password</Button>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default ResetPasswordPage;
