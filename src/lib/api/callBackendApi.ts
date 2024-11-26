import { createFetchClient } from "@zayne-labs/callapi";

const callBackendApi = createFetchClient({
	baseURL: import.meta.env.VITE_BACKEND_URL,
});

export { callBackendApi };
