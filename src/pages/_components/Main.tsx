import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentPropsWithoutRef<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("flex grow flex-col pb-[56px] pt-5", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export default Main;
