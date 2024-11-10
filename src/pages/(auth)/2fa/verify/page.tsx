import { IconBox } from "@/components/common";
import { Button, Form, InputOTP } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitUntil } from "@zayne-labs/toolkit";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Main } from "../../../_components";

const TwoFactorAuthSchema = z.object({
	otp: z.string().min(6, "Please enter a valid code!"),
});

type TwoFactorAuthFormData = z.infer<typeof TwoFactorAuthSchema>;

function TwoFactorAuthPage() {
	const methods = useForm<TwoFactorAuthFormData>({
		resolver: zodResolver(TwoFactorAuthSchema),
		mode: "onChange",
		defaultValues: {
			otp: "",
		},
	});

	const { control, formState, handleSubmit } = methods;

	const onSubmit = async (data: TwoFactorAuthFormData) => {
		await waitUntil(2000);

		console.info(data);
	};

	return (
		<Main>
			<header>
				<h1 className="mt-6 text-[27px] font-medium">Let’s us verify it’s you</h1>

				<p className="mt-2 text-[14px] text-grey-700">
					Enter the 6 digit code sent to miraclegift@gmail.com to verify your account
				</p>
			</header>

			<section className="mt-10">
				<Form.Root methods={methods} onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
					<Form.Item control={control} name="otp" className="flex flex-col gap-3">
						<Form.Label className="font-medium">Enter Code</Form.Label>

						<Form.Controller
							render={({ field }) => (
								<>
									<InputOTP.Root
										maxLength={6}
										autoFocus={true}
										value={field.value}
										onChange={field.onChange}
										classNames={{
											container: "gap-4 font-medium",
											// container:
											// 	"gap-4 [&>div]:text-[25px] [&>div]:[-webkit-text-security:disc]",
										}}
									>
										<InputOTP.Slot
											index={0}
											classNames={{
												base: "size-11 rounded-[4px] border-[0.5px] border-grey-200 bg-grey-50",
												isActive: "ring-secondary",
											}}
										/>
										<InputOTP.Slot
											index={1}
											classNames={{
												base: "size-11 rounded-[4px] border-[0.5px] border-grey-200 bg-grey-50",
												isActive: "ring-secondary",
											}}
										/>
										<InputOTP.Slot
											index={2}
											classNames={{
												base: "size-11 rounded-[4px] border-[0.5px] border-grey-200 bg-grey-50",
												isActive: "ring-secondary",
											}}
										/>
										<InputOTP.Slot
											index={3}
											classNames={{
												base: "size-11 rounded-[4px] border-[0.5px] border-grey-200 bg-grey-50",
												isActive: "ring-secondary",
											}}
										/>
										<InputOTP.Slot
											index={4}
											classNames={{
												base: "size-11 rounded-[4px] border-[0.5px] border-grey-200 bg-grey-50",
												isActive: "ring-secondary",
											}}
										/>
										<InputOTP.Slot
											index={5}
											classNames={{
												base: "size-11 rounded-[4px] border-[0.5px] border-grey-200 bg-grey-50",
												isActive: "ring-secondary",
											}}
										/>
									</InputOTP.Root>

									<div className="flex items-center gap-2">
										<span className="grid size-8 place-items-center rounded-full bg-grey-100">
											<IconBox
												icon="material-symbols:shield-lock-outline-rounded"
												className="size-5 text-[hsl(137,99%,39%)]"
											/>
										</span>

										<p className="text-[14px]">Secured by encryption</p>
									</div>
								</>
							)}
						/>
					</Form.Item>

					<Button
						type="submit"
						className="mt-9"
						isLoading={formState.isSubmitting}
						disabled={!formState.isValid}
					>
						Verify
					</Button>

					<p className="mt-6 text-grey-800">
						Resend code in{" "}
						<span
							className="ml-[6px] inline-block font-medium text-secondary underline
								underline-offset-2"
						>
							23sec
						</span>
					</p>
				</Form.Root>
			</section>
		</Main>
	);
}

export default TwoFactorAuthPage;
