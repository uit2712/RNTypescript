export default class Hello {
    message: string;

    constructor({
        message
    }: {
        message: string
    }) {
        this.message = message;
    }
}