import { useEffectOnce, useMountEffect } from "@zayne-labs/toolkit/react";
import { type AnyString, isString } from "@zayne-labs/toolkit/type-helpers";
import { useState } from "react";
import { createPortal } from "react-dom";

type ValidHtmlTags = keyof HTMLElementTagNameMap;

type PortalProps = {
	children: React.ReactNode;
	to?: ValidHtmlTags | AnyString | HTMLElement | null;
	insertPosition?: InsertPosition;
};

function Teleport(props: PortalProps) {
	const { children, to, insertPosition } = props;

	const [reactPortal, setReactPortal] = useState<React.ReactPortal | null>(null);

	useEffectOnce(() => {
		if (!to || !insertPosition) return;

		const destination = isString(to) ? document.querySelector<HTMLElement>(to) : to;

		const tempWrapper = document.createElement("div");
		tempWrapper.style.display = "contents";

		destination?.insertAdjacentElement(insertPosition, tempWrapper);

		setReactPortal(createPortal(children, tempWrapper));

		return () => {
			tempWrapper.remove();
		};
	});

	useMountEffect(() => {
		if (!to || insertPosition) return;

		const destination = isString(to) ? document.querySelector<HTMLElement>(to) : to;

		destination && setReactPortal(createPortal(children, destination));
	});

	return reactPortal;
}

export default Teleport;
