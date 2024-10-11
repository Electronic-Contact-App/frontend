import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const routes = createRoutesFromElements(<Route path="/" element={<p>Hello World</p>} />);

export const router = createBrowserRouter(routes);
