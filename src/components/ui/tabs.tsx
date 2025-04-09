import { cnMerge } from "@/lib/utils/cn";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { InferProps } from "@zayne-labs/toolkit/react";

function TabList(props: InferProps<typeof TabsPrimitive.List>) {
	const { className, ...restOfProps } = props;

	return (
		<TabsPrimitive.List
			className={cnMerge(
				`bg-shadcn-muted text-shadcn-muted-foreground inline-flex h-10 items-center justify-center
				rounded-md p-1`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function TabsTrigger(props: InferProps<typeof TabsPrimitive.Trigger>) {
	const { className, ...restOfProps } = props;

	return (
		<TabsPrimitive.Trigger
			className={cnMerge(
				`ring-offset-shadcn-background focus-visible:ring-shadcn-ring
				data-[state=active]:bg-shadcn-background data-[state=active]:text-shadcn-foreground inline-flex
				items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap
				transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden
				disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-xs`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function TabsContent(props: InferProps<typeof TabsPrimitive.Content>) {
	const { className, ...restOfProps } = props;

	return (
		<TabsPrimitive.Content
			className={cnMerge(
				`ring-offset-shadcn-background focus-visible:ring-shadcn-ring mt-2 focus-visible:ring-2
				focus-visible:ring-offset-2 focus-visible:outline-hidden`,
				className
			)}
			{...restOfProps}
		/>
	);
}

export const Root = TabsPrimitive.Root;

export const List = TabList;

export const Trigger = TabsTrigger;

export const Content = TabsContent;
