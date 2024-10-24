import { withTV } from "tailwind-variants/transformer";
import animationPlugin from "tailwindcss-animate";

const config = withTV({
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	darkMode: ["class", '[data-theme="dark"]'],

	plugins: [animationPlugin],

	theme: {
		colors: {
			white: "hsl(0, 0%, 100%)",

			transparent: "transparent",

			blue: {
				50: "var(--color-blue-50)",
				100: "var(--color-blue-100)",
				200: "var(--color-blue-200)",
				300: "var(--color-blue-300)",
				400: "var(--color-blue-400)",
				primary: "var(--color-primary)",
				600: "var(--color-blue-600)",
				700: "var(--color-blue-700)",
				800: "var(--color-blue-800)",
				900: "var(--color-blue-900)",
			},

			orange: {
				50: "var(--color-orange-50)",
				100: "var(--color-orange-100)",
				200: "var(--color-orange-200)",
				300: "var(--color-orange-300)",
				400: "var(--color-orange-400)",
				secondary: "var(--color-secondary)",
				600: "var(--color-orange-600)",
				700: "var(--color-orange-700)",
				800: "var(--color-orange-800)",
				900: "var(--color-orange-900)",
			},

			grey: {
				50: "var(--color-grey-50)",
				100: "var(--color-grey-100)",
				200: "var(--color-grey-200)",
				300: "var(--color-grey-300)",
				400: "var(--color-grey-400)",
				500: "var(--color-grey-500)",
				600: "var(--color-grey-600)",
				700: "var(--color-grey-700)",
				800: "var(--color-grey-800)",
				900: "var(--color-grey-900)",
			},

			error: {
				50: "var(--color-error-50)",
				100: "var(--color-error-100)",
				200: "var(--color-error-200)",
				300: "var(--color-error-300)",
				400: "var(--color-error-400)",
				500: "var(--color-error-500)",
				600: "var(--color-error-600)",
				700: "var(--color-error-700)",
				800: "var(--color-error-800)",
				900: "var(--color-error-900)",
			},

			success: {
				50: "var(--color-success-50)",
				100: "var(--color-success-100)",
				200: "var(--color-success-200)",
				300: "var(--color-success-300)",
				400: "var(--color-success-400)",
				500: "var(--color-success-500)",
				600: "var(--color-success-600)",
				700: "var(--color-success-700)",
				800: "var(--color-success-800)",
				900: "var(--color-success-900)",
			},

			"light-green": "var(--color-light-green)",

			"green-stroke": "var(--color-green-stroke)",

			primary: "var(--color-primary)",

			secondary: "var(--color-secondary)",

			background: "var(--color-background)",

			body: {
				text: "var(--color-body-text)",
				bolder: "var(--color-body-bolder)",
			},

			shadcn: {
				background: "hsl(0,0%,0%)",
				foreground: "hsl(222.2 47.4% 11.2%)",
				popover: "theme(colors.shadcn.background)",
				primary: "theme(colors.shadcn.foreground)",
				"primary-foreground": "hsl(210 40% 98%)",
				"popover-foreground": "theme(colors.shadcn.foreground)",
				accent: "hsl(210 40% 96.1%)",
				"accent-foreground": "theme(colors.shadcn.foreground)",
				input: "hsl(214.3 31.8% 91.4%)",
				border: "theme(colors.shadcn.input)",
				ring: "hsl(215 20.2% 65.1%)",
				muted: "theme(colors.shadcn.accent)",
				"muted-foreground": "hsl(215.4 16.3% 46.9%)",
			},
		},

		extend: {
			borderRadius: {
				full: "50%",
			},

			animation: {
				flicker: "flicker 3s linear infinite",
			},

			fontFamily: {
				satoshi: ["Satoshi", "sans-serif"],
			},

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
});

export default config;
