import { placeholderProfile } from "@/assets";
import { Image } from "@unpic/react";
import { Main } from "../_components";

function HomePage() {
	return (
		<Main>
			<header>
				<Image priority={true} layout="fullWidth" src={placeholderProfile} alt="" />
			</header>
		</Main>
	);
}

export default HomePage;
