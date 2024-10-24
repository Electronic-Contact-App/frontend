import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentPropsWithoutRef<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("flex max-w-[400px] grow flex-col px-5 py-14", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export default Main;
