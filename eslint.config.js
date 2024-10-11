import zayne from "@zayne-labs/eslint-config";

export default zayne({
	ignores: ["dist/**", "eslint.config.js"],
	react: true,
	tailwindcss: true,
	typescript: {
		tsconfigPath: "tsconfig.eslint.json",
	},
});
