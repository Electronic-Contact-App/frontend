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
				<p className="text-grey-500 mt-2 text-[15px] leading-[20px]">
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
						className="border-grey-200 placeholder:text-grey-600 h-[44px] rounded-[8px] border
							px-[10px]"
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
