import type { Prettify } from "@zayne-labs/toolkit/type-helpers";
import { type VariantProps, tv } from "tailwind-variants";
import { Show, Slot } from "../common";
import { Arrow, SpinnerIcon } from "../icons";

// prettier-ignore
export type ButtonProps = Prettify<React.ComponentPropsWithRef<"button"> & VariantProps<typeof button> & {
	asChild?: boolean;
	isLoading?: boolean;
	unstyled?: boolean;
}>;

const button = tv(
	{
		base: "flex items-center justify-center rounded-[8px]",

		variants: {
			theme: {
				ghost: "border border-app-primary bg-transparent text-app-primary",

				primary: "bg-app-primary text-white",

				"primary-inverted": "border border-app-blue-300 bg-app-blue-50 text-app-primary",
			},

			size: {
				large: "h-[48px] w-full px-6 text-base",
				medium: "h-[48px] px-6 text-base",
			},

			withArrows: {
				true: "gap-2",
			},

			disabled: {
				true: "cursor-not-allowed border-none bg-app-grey-300 text-white",
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
		withArrows,
		...extraButtonProps
	} = props;

	const Component = asChild ? Slot : "button";

	const BTN_CLASSES = !unstyled
		? button({ className, disabled: extraButtonProps.disabled, size, theme, withArrows })
		: className;

	return (
		<Component type={type} className={BTN_CLASSES} {...extraButtonProps}>
			{withArrows && <Arrow className="rotate-180" />}

			<Show when={isLoading}>
				<Show.Content>
					<SpinnerIcon className="animate-spin" />
				</Show.Content>

				<Show.Fallback>{children}</Show.Fallback>
			</Show>

			{withArrows && <Arrow />}
		</Component>
	);
}

export default Button;
