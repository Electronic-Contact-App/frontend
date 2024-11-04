import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentPropsWithoutRef<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main
			className={cnMerge("flex w-full max-w-[393px] grow flex-col px-5 pb-[56px] pt-5", className)}
			{...restOfProps}
		>
			{children}
		</main>
	);
}

export default Main;
