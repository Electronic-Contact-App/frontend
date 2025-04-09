import type { InferProps } from "@zayne-labs/toolkit/react";
import type { Prettify } from "@zayne-labs/toolkit/type-helpers";
import { type VariantProps, tv } from "tailwind-variants";
import { Slot, Slottable } from "../common";
import { ArrowIcon, SpinnerIcon } from "../icons";

// prettier-ignore
export type ButtonProps = Prettify<InferProps<"button"> & VariantProps<typeof button> & {
	asChild?: boolean;
	isLoading?: boolean;
	unstyled?: boolean;
}>;

const button = tv(
	{
		base: "flex items-center justify-center rounded-[8px]",

		variants: {
			theme: {
				ghost: "border-primary text-primary border bg-transparent",

				primary: "bg-primary text-white",

				"primary-inverted": "text-primary border border-blue-300 bg-blue-50",
			},

			size: {
				large: "h-[48px] w-full px-6 text-base",
				medium: "h-[48px] px-6 text-base",
			},

			withArrows: {
				true: "gap-2",
			},

			isDisabled: {
				true: "bg-grey-300 cursor-not-allowed border-none text-white",
			},
		},

		defaultVariants: {
			size: "large",
			theme: "primary",
		},
	},
	{
		responsiveVariants: ["md", "lg"],
	}
);

function Button(props: ButtonProps) {
	const {
		asChild,
		children,
		className,
		size,
		isLoading = false,
		theme,
		type = "button",
		unstyled,
		isDisabled,
		withArrows,
		...extraButtonProps
	} = props;

	const Component = asChild ? Slot : "button";

	const BTN_CLASSES = !unstyled ? button({ className, isDisabled, size, theme, withArrows }) : className;

	return (
		<Component type={type} className={BTN_CLASSES} {...extraButtonProps}>
			{withArrows && <ArrowIcon />}

			<Slottable>
				{!isLoading ? children : <SpinnerIcon className="animate-spin [animation-duration:1.5s]" />}
			</Slottable>

			{withArrows && <ArrowIcon className="rotate-180" />}
		</Component>
	);
}

export { Button };
