import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: [],
	react: true,
	tailwindcss: true,
	tanstack: {
		query: true,
	},
	typescript: {
		tsconfigPath: "tsconfig.eslint.json",
	},
});
