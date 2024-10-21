import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: ["dist/**"],
	react: true,
	tailwindcss: true,
	perfectionist: false,
	tanstack: {
		query: true,
	},
	typescript: {
		tsconfigPath: "tsconfig.eslint.json",
	},
});
