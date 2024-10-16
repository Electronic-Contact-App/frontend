import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./tailwind.css";

createRoot(document.querySelector("#root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
