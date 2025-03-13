export default class InvalidRequestError extends Error {
	constructor() {
		super();
		this.name = InvalidRequestError.name;
	}
}
