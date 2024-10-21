export default {
	"*.{ts,tsx}": () => "pnpm lint:check-types",
	"*.{js,ts,tsx,mjs}": "pnpm lint:eslint",
};
