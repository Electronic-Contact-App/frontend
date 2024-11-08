import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./tailwind.css";

createRoot(document.body).render(
	<StrictMode>
		<App />
	</StrictMode>
);
