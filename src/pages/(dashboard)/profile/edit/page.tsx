import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Main } from "@/pages/_components";

const EditProfile = () => {
	return (
		<Main>
			<Button
				unstyled={true}
				className="mx-5 mt-4 flex size-11 items-center justify-center self-start rounded-full
					bg-grey-100"
				onClick={() => history.back()}
			>
				<ArrowIcon className="text-icon" />
			</Button>
		</Main>
	);
};

export default EditProfile;
