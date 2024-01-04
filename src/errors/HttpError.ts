import { HttpStatusCode } from "@/types/enums";

class HttpError extends Error {
    statusCode: HttpStatusCode;
    data: [] | null;

    constructor(statusCode: HttpStatusCode, message: string, data: any = null) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        this.data = data;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default HttpError;