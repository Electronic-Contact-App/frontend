import { IconBox } from "@/components/common";
import { Button } from "@/components/ui";
import { Main } from "./_components";

function HomePage() {
	return (
		<Main>
			<Button
				unstyled={true}
				className="flex size-11 items-center justify-center rounded-full bg-grey-100"
			>
				<IconBox icon="material-symbols:arrow-forward-rounded" className="size-6 rotate-180" />
			</Button>
		</Main>
	);
}

export default HomePage;
