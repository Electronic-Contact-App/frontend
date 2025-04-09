import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentPropsWithoutRef<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("flex grow flex-col pt-5 pb-[56px]", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export default Main;
