import { getOtherChildren, getSlotElement } from "@zayne-labs/toolkit/react";

type ShowProps = {
	children: React.ReactNode;
	fallback?: React.ReactNode;
	when: boolean;
};

function Show({ children, fallback, when }: ShowProps) {
	const fallBackSlot = getSlotElement(children, ShowFallback, {
		errorMessage: "Only one <Show.Default> component is allowed",
		throwOnMultipleSlotMatch: true,
	});

	const contentSlot = getSlotElement(children, ShowContent, {
		errorMessage: "Only one <Show.Content> component is allowed",
		throwOnMultipleSlotMatch: true,
	});

	const otherChildren = getOtherChildren(children, [ShowFallback, ShowContent]);

	if (fallBackSlot && fallback) {
		throw new Error(`
			Both fallback mechanisms cannot be used at the same time.
			Either the "fallback" prop is used or "<Show.Fallback>" component is used
		`);
	}

	return when ? (contentSlot ?? otherChildren) : (fallBackSlot ?? fallback);
}

function ShowContent({ children }: Pick<ShowProps, "children">) {
	return children;
}
ShowContent.slot = Symbol.for("content");

function ShowFallback({ children }: Pick<ShowProps, "children">) {
	return children;
}
ShowFallback.slot = Symbol.for("fallback");

Show.Fallback = ShowFallback;
Show.Content = ShowContent;

export default Show;