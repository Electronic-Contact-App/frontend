import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit/react";
import { OTPInput, OTPInputContext } from "input-otp";
import { useContext } from "react";
import { IconBox } from "../common";

export function InputOTP(
	props: InferProps<typeof OTPInput> & { classNames?: { container?: string; input?: string } }
) {
	const { containerClassName, className, classNames, ...restOfProps } = props;

	return (
		<OTPInput
			containerClassName={cnMerge(
				"flex items-center gap-2 has-disabled:opacity-50",
				containerClassName,
				classNames?.container
			)}
			className={cnMerge("disabled:cursor-not-allowed", className, classNames?.input)}
			{...restOfProps}
		/>
	);
}

export function InputOTPGroup(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	return <div className={cnMerge("flex items-center", className)} {...restOfProps} />;
}

export function InputOTPSlot(
	props: InferProps<"div"> & { index: number; classNames?: { base?: string; isActive?: string } }
) {
	const { index, className, classNames, ...restOfProps } = props;

	const inputOTPContext = useContext(OTPInputContext);

	// eslint-disable-next-line ts-eslint/no-non-null-assertion
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]!;

	return (
		<div
			className={cnMerge(
				`border-shadcn-input relative flex size-9 items-center justify-center border-y border-r text-sm
				shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md`,
				isActive && ["ring-shadcn-ring z-10 ring-1", classNames?.isActive],
				className,
				classNames?.base
			)}
			{...restOfProps}
		>
			{char}
			{hasFakeCaret && (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="animate-caret-blink bg-shadcn-foreground h-4 w-px duration-1000" />
				</div>
			)}
		</div>
	);
}

export function InputOTPSeparator(props: InferProps<"div">) {
	return (
		<div role="separator" {...props}>
			<IconBox icon="radix-icons:dash" />
		</div>
	);
}

export const Root = InputOTP;
export const Group = InputOTPGroup;
export const Slot = InputOTPSlot;
export const Separator = InputOTPSeparator;
