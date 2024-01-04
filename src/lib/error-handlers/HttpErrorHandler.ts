import HttpError from "@/errors/HttpError";
import JsonResponse from "../json-response";
import Logger from "../logger";
import ErrorHandler from "./ErrorHandler";
import { Response } from "express";

class HttpErrorHandler extends ErrorHandler {
    protected canHandle(error: unknown): boolean {
        return error instanceof HttpError;
    }

    protected getResponse(jsonResponse: JsonResponse, error: HttpError): Response {
        Logger.error(`HttpError: ${error.statusCode} ${error.message}`)
        return jsonResponse
                .error(error.statusCode)
                .withData(error.data)
                .withMessage(error.message)
                .send();
    }
}

export default HttpErrorHandler;