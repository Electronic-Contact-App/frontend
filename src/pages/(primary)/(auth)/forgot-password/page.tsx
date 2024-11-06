import { Button, Form } from "@/components/ui";
import { Main } from "../../_components";
import { useForm } from "react-hook-form";

function ForgotPasswordPage() {
	const methods = useForm({
		defaultValues: {
			email: "",
		},
	});

	return (
		<Main className="gap-10">
			<header>
				<h1 className="text-[24px] font-bold">Forgot Password?</h1>
				<p className="mt-2 text-[15px] leading-[20px] text-grey-500">
					Enter your email to receive a code to reset your password
				</p>
			</header>

			<Form.Root
				methods={methods}
				className="gap-4"
				onSubmit={(event) => void methods.handleSubmit((data) => console.info(data))(event)}
			>
				<Form.Item control={methods.control} name="email" className="gap-3">
					<Form.Label className="font-medium">Email</Form.Label>
					<Form.Input
						type="email"
						className="h-[44px] rounded-[8px] border border-grey-200 px-[10px]
							placeholder:text-grey-600"
						placeholder="Enter your email address"
					/>
				</Form.Item>

				<div className="mt-4 flex flex-col items-center gap-7">
					<Button type="submit">Next</Button>
				</div>
			</Form.Root>
		</Main>
	);
}

export default ForgotPasswordPage;
