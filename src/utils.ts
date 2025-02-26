import QueryString from "qs";

export function formatRequestPayload<T>(params: T) {
	return QueryString.stringify(params, { arrayFormat: "brackets" });
}
