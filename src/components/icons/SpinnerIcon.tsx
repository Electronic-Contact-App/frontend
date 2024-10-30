const SpinnerIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle cx="12.5" cy="12" r="10" stroke="white" strokeWidth="2" />
		<circle cx="12.5" cy="12" r="2" fill="#DA700A" />
		<circle cx="12.5" cy="2" r="2" fill="#DA700A" />
	</svg>
);

export default SpinnerIcon;
