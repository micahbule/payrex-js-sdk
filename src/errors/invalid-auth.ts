export default class InvalidAuthError extends Error {
  constructor() {
    super();
    this.name = InvalidAuthError.name;
  }
}
