import { ZodError } from "zod";
import ErrorHandler from "./ErrorHandler";
import JsonResponse from "../json-response";
import { Response } from "express";
import Logger from "../logger";
import { HttpStatusCode } from "@/types/enums";

class ZodErrorHandler extends ErrorHandler {
    protected canHandle(error: unknown): boolean {
        return error instanceof ZodError;
    }

    protected getResponse(jsonResponse: JsonResponse, error: ZodError): Response {
        Logger.error(`ZodError: ${error.issues[0].message}`)
        return jsonResponse.error(HttpStatusCode.BadRequest)
                .withMessage(error.issues[0].message)
                .send();
    }
}

export default ZodErrorHandler;