import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentPropsWithoutRef<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("flex grow flex-col p-5 max-md:max-w-[400px]", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export default Main;
