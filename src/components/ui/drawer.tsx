import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit/react";
import { Drawer as DrawerPrimitive } from "vaul";

function DrawerRoot(props: InferProps<typeof DrawerPrimitive.Root>) {
	const { shouldScaleBackground = true, ...restOfProps } = props;

	return <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...restOfProps} />;
}

function DrawerOverlay(props: InferProps<typeof DrawerPrimitive.Overlay>) {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Overlay
			className={cnMerge("fixed inset-0 z-50 bg-black/80", className)}
			{...restOfProps}
		/>
	);
}

function DrawerContent(props: InferProps<typeof DrawerPrimitive.Content> & { withHandle?: boolean }) {
	const { className, children, withHandle = true, ...restOfProps } = props;

	return (
		<Portal>
			<DrawerOverlay />

			<DrawerPrimitive.Content
				className={cnMerge(
					`bg-shadcn-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col
					rounded-t-[10px] border`,
					className
				)}
				{...restOfProps}
			>
				{withHandle && (
					<span className="bg-shadcn-muted mx-auto mt-4 block h-2 w-[100px] rounded-full" />
				)}

				{children}
			</DrawerPrimitive.Content>
		</Portal>
	);
}

function DrawerHeader(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	return (
		<div className={cnMerge("grid gap-1.5 p-4 text-center sm:text-left", className)} {...restOfProps} />
	);
}

function DrawerFooter(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	return <div className={cnMerge("mt-auto flex flex-col gap-2 p-4", className)} {...restOfProps} />;
}

function DrawerTitle(props: InferProps<typeof DrawerPrimitive.Title>) {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Title
			className={cnMerge("text-lg leading-none font-semibold tracking-tight", className)}
			{...restOfProps}
		/>
	);
}

const DrawerDescription = (props: InferProps<typeof DrawerPrimitive.Description>) => {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Description
			className={cnMerge("text-shadcn-muted-foreground text-sm", className)}
			{...restOfProps}
		/>
	);
};

export const Root = DrawerRoot;

export const Overlay = DrawerOverlay;

export const Content = DrawerContent;

export const Header = DrawerHeader;

export const Footer = DrawerFooter;

export const Title = DrawerTitle;

export const Description = DrawerDescription;

export const Trigger = DrawerPrimitive.Trigger;

export const Portal = DrawerPrimitive.Portal;

export const Close = DrawerPrimitive.Close;
