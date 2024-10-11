import type { Config } from "tailwindcss/types/config";

const tailwindConfig = {
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/components/pagination.js",
	],
	darkMode: ["class", '[data-theme="dark"]'],

	theme: {
		backgroundImage: {},

		extend: {
			animation: {
				flicker: "flicker 3s linear infinite",
			},

			colors: {
				shadcn: {
					background: "hsl(0 0% 100%)",
					border: "theme(colors.input)",
					foreground: "hsl(222.2 47.4% 11.2%)",
					input: "hsl(214.3 31.8% 91.4%)",
					muted: "hsl(210 40% 96.1%)",
					"muted-foreground": "hsl(215.4 16.3% 46.9%)",
					primary: "hsl(222.2 47.4% 11.2%)",
					"primary-foreground": "hsl(210 40% 98%)",
					ring: "hsl(215 20.2% 65.1%)",
				},

				sonner: {
					"error-bg": "hsl(358 76% 10%)",
					"error-border": "hsl(357 89% 16%)",
					"error-text": "hsl(358 100% 81%)",
					"success-bg": "hsl(150 100% 6%)",
					"success-border": "hsl(147 100% 12%)",
					"success-text": "hsl(150 100% 90%)",
				},
			},

			fontFamily: {},

			keyframes: {
				flicker: {
					"0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, to": {
						filter:
							"drop-shadow(0 0 1px rgba(252,211,77)) drop-shadow(0 0 15px rgba(245,158,11)) drop-shadow(0 0 1px rgba(252,211,77))",
						opacity: ".99",
					},

					"20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
						filter: "none",
						opacity: ".4",
					},
				},
			},
		},

		screens: {
			lg: "1000px",
			md: "768px",
			sm: "480px",
			xl: "1280px",
		},
	},
} satisfies Config;

export default tailwindConfig;
