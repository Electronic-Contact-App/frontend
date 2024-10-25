import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentPropsWithoutRef<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main
			className={cnMerge("flex grow flex-col px-5 py-14 max-md:max-w-[380px]", className)}
			{...restOfProps}
		>
			{children}
		</main>
	);
}

export default Main;
