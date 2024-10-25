import { callApi } from "@zayne-labs/callapi";

const callBackendApi = callApi.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
});

export { callBackendApi };
