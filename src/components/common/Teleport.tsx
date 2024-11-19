import { useMountEffect } from "@zayne-labs/toolkit/react";
import { type AnyString, isString } from "@zayne-labs/toolkit/type-helpers";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { renderToString } from "react-dom/server";

type ValidHtmlTags = keyof HTMLElementTagNameMap;

type PortalProps = {
	children: React.ReactNode;
	to?: ValidHtmlTags | AnyString | HTMLElement | null;
	insertPosition?: InsertPosition;
};

function Teleport(props: PortalProps) {
	const { children, to, insertPosition } = props;

	const [teleportDestination, setTeleportDestination] = useState<HTMLElement | null>(null);

	// needs fixing, renderToString removes event listeners
	useEffect(() => {
		if (!to || !insertPosition) return;

		const destination = isString(to) ? document.querySelector<HTMLElement>(to) : to;

		const jsxString = renderToString(children);

		const range = document.createRange();
		const fragment = range.createContextualFragment(jsxString);
		const element = fragment.firstElementChild;

		if (!element) return;

		destination?.insertAdjacentElement(insertPosition, element);

		return () => {
			element.remove();
		};
	});

	useMountEffect(() => {
		if (!to || insertPosition) return;

		const destination = isString(to) ? document.querySelector<HTMLElement>(to) : to;

		setTeleportDestination(destination);
	});

	return teleportDestination && createPortal(children, teleportDestination);
}

export default Teleport;
