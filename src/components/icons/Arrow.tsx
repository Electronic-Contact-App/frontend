const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19.0002 11.9998L4.00024 11.9998"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M15 6.99988L19.2929 11.2928C19.6262 11.6261 19.7929 11.7928 19.7929 11.9999C19.7929 12.207 19.6262 12.3737 19.2929 12.707L15 16.9999"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default Arrow;
