import { Image as ImagePrimitive } from "@unpic/react";
import type { InferProps } from "@zayne-labs/toolkit/react";

function Image(props: InferProps<typeof ImagePrimitive>) {
	return <ImagePrimitive {...props} />;
}

export default Image;
