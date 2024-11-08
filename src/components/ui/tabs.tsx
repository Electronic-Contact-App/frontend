import { cnMerge } from "@/lib/utils/cn";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { InferProps } from "@zayne-labs/toolkit/react";

function TabList(props: InferProps<typeof TabsPrimitive.List>) {
	const { className, ...restOfProps } = props;

	return (
		<TabsPrimitive.List
			className={cnMerge(
				`inline-flex h-10 items-center justify-center rounded-md bg-shadcn-muted p-1
				text-shadcn-muted-foreground`,
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
				`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm
				font-medium ring-offset-shadcn-background transition-all focus-visible:outline-none
				focus-visible:ring-2 focus-visible:ring-shadcn-ring focus-visible:ring-offset-2
				disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-shadcn-background
				data-[state=active]:text-shadcn-foreground data-[state=active]:shadow-sm`,
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
				`mt-2 ring-offset-shadcn-background focus-visible:outline-none focus-visible:ring-2
				focus-visible:ring-shadcn-ring focus-visible:ring-offset-2`,
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
