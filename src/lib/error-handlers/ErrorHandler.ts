import { HttpStatusCode } from "@/types/enums";
import Logger from "../logger";
import JsonResponse from "../json-response";
import { Response } from "express";

abstract class ErrorHandler {
    protected nextHandler?: ErrorHandler;

    setNextHandler(nextHandler: ErrorHandler): ErrorHandler {
        this.nextHandler = nextHandler;
        return this;
    }

    handle(res: Response, error: unknown): Response {
        const jsonResponse = new JsonResponse(res);
        if (this.canHandle(error)) {
            return this.getResponse(jsonResponse, error);
        } else if (this.nextHandler) {
            return this.nextHandler.handle(res, error);
        } else {
            Logger.error(`ErrorHandler: ${JSON.stringify(error)}`)
            Logger.error(error)
            return jsonResponse
                .error(HttpStatusCode.InternalServerError)
                .withMessage('Something went wrong while processing your request')
                .send();
        }
    }

    protected abstract canHandle(error: unknown): boolean;
    protected abstract getResponse(jsonResponse: JsonResponse, error: unknown): Response;
}

export default ErrorHandler;