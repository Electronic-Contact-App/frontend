/// <reference types="vite/client" />

/* eslint-disable ts-eslint/consistent-type-definitions */
interface ImportMetaEnv {
	readonly NODE_ENV: "development" | "production";
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
