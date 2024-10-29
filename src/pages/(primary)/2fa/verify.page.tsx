import { IconBox } from "@/components/common";
import { InputOTP } from "@/components/ui";
import { Main } from "../_components";

function TwoFactorAuthPage() {
	return (
		<Main>
			<header>
				<div className="flex flex-col items-center gap-2">
					<span className="grid size-[60px] place-items-center rounded-full bg-grey-100">
						<IconBox
							icon="material-symbols:shield-lock-outline-rounded"
							className="size-10 text-[hsl(137,99%,39%)]"
						/>
					</span>

					<p className="text-[14px]">Secured by encryption</p>
				</div>

				<h1 className="mt-6 text-[27px] font-medium">Let’s us verify it’s you</h1>

				<p className="mt-2 text-[14px] text-grey-700">
					Enter the 6 digit code sent to miraclegift@gmail.com to verify your account
				</p>
			</header>

			<section className="mt-10">
				<div>
					<label className="font-medium">Enter Code</label>
					<InputOTP.Root maxLength={6}>
						<InputOTP.Slot index={0} className="rounded-[4px] bg-blue-200" />
						<InputOTP.Slot index={1} className="rounded-[4px]" />
						<InputOTP.Slot index={2} className="rounded-[4px]" />
						<InputOTP.Slot index={3} className="rounded-[4px]" />
						<InputOTP.Slot index={4} className="rounded-[4px]" />
						<InputOTP.Slot index={5} className="rounded-[4px] bg-grey-50" />
					</InputOTP.Root>
				</div>
			</section>
		</Main>
	);
}

export default TwoFactorAuthPage;
