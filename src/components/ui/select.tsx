import { IconBox } from "@/components/common";
import { cnMerge } from "@/lib/utils/cn";
import * as SelectPrimitive from "@radix-ui/react-select";
import type { InferProps } from "@zayne-labs/toolkit/react";

function SelectTrigger(
	props: InferProps<typeof SelectPrimitive.Trigger> & {
		classNames?: { base?: string; icon?: string };
		icon?: string;
	}
) {
	const { children, className, classNames, icon, ...restOfProps } = props;

	return (
		<SelectPrimitive.Trigger
			className={cnMerge(
				`border-shadcn-input ring-offset-shadcn-background focus:ring-shadcn-ring flex h-10 w-full
				items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm
				whitespace-nowrap shadow-sm focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed
				disabled:opacity-50 [&>span]:line-clamp-1`,
				[classNames?.base, className]
			)}
			{...restOfProps}
		>
			{children}

			<SelectPrimitive.Icon asChild={true}>
				<IconBox
					icon={icon ?? "lucide:chevron-down"}
					className={cnMerge("size-5", classNames?.icon)}
				/>
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	);
}

function SelectScrollUpButton(props: InferProps<typeof SelectPrimitive.ScrollUpButton>) {
	const { className, ...restOfProps } = props;

	return (
		<SelectPrimitive.ScrollUpButton
			className={cnMerge("flex cursor-default items-center justify-center py-1", className)}
			{...restOfProps}
		>
			<IconBox icon="lucide:chevron-up" />
		</SelectPrimitive.ScrollUpButton>
	);
}

function SelectScrollDownButton(props: InferProps<typeof SelectPrimitive.ScrollDownButton>) {
	const { className, ...restOfProps } = props;

	return (
		<SelectPrimitive.ScrollDownButton
			className={cnMerge("flex cursor-default items-center justify-center py-1", className)}
			{...restOfProps}
		>
			<IconBox icon="lucide:chevron-down" />
		</SelectPrimitive.ScrollDownButton>
	);
}

function SelectContent(
	props: InferProps<typeof SelectPrimitive.Content> & {
		classNames?: { base?: string; viewport?: string };
	}
) {
	const { children, className, classNames, position = "popper", ...restOfProps } = props;

	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				className={cnMerge(
					`bg-shadcn-popover text-shadcn-popover-foreground data-[state=open]:animate-in
					data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
					data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
					data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
					data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50
					flex max-h-96 min-w-[128px] flex-col overflow-hidden rounded-md border shadow-md`,
					position === "popper" &&
						`data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1
						data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
					[className, classNames?.base]
				)}
				position={position}
				{...restOfProps}
			>
				<ScrollDownButton />

				<SelectPrimitive.Viewport
					className={cnMerge(
						"flex flex-col p-1",
						position === "popper" &&
							"h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)",
						classNames?.viewport
					)}
				>
					{children}
				</SelectPrimitive.Viewport>

				<ScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
}

function SelectLabel(props: InferProps<typeof SelectPrimitive.Label>) {
	const { className, ...restOfProps } = props;

	return (
		<SelectPrimitive.Label
			className={cnMerge("px-2 py-2.5 text-sm font-semibold", className)}
			{...restOfProps}
		/>
	);
}

function SelectItem(props: InferProps<typeof SelectPrimitive.Item> & { withIndicator?: boolean }) {
	const { children, className, withIndicator = true, ...restOfProps } = props;

	return (
		<SelectPrimitive.Item
			className={cnMerge(
				`focus:bg-shadcn-accent focus:text-shadcn-accent-foreground relative flex w-full cursor-default
				items-center rounded-sm py-1.5 pr-2 pl-[25px] text-[13px] outline-hidden select-none
				data-disabled:pointer-events-none data-disabled:opacity-50`,
				className
			)}
			{...restOfProps}
		>
			{withIndicator && (
				<span className="absolute left-2 flex size-3.5 items-center justify-center">
					<SelectPrimitive.ItemIndicator>
						<IconBox icon="lucide:check" className="size-[14px]" />
					</SelectPrimitive.ItemIndicator>
				</span>
			)}

			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
}

function SelectSeparator(props: InferProps<typeof SelectPrimitive.Separator>) {
	const { className, ...restOfProps } = props;

	return (
		<SelectPrimitive.Separator
			className={cnMerge("bg-shadcn-muted -mx-1 my-1 h-px", className)}
			{...restOfProps}
		/>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export const { Group, Root, Value } = SelectPrimitive;
export const Content = SelectContent;
export const Item = SelectItem;
export const Label = SelectLabel;
export const ScrollDownButton = SelectScrollDownButton;
export const ScrollUpButton = SelectScrollUpButton;
export const Separator = SelectSeparator;
export const Trigger = SelectTrigger;
