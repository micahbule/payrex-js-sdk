export default class ResourceNotFoundError extends Error {
	constructor() {
		super();
		this.name = ResourceNotFoundError.name;
	}
}
