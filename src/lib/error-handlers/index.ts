import HttpErrorHandler from "./HttpErrorHandler";
import ZodErrorHandler from "./ZodErrorHandler";

export default (new HttpErrorHandler())
                .setNextHandler(new HttpErrorHandler())
                .setNextHandler(new ZodErrorHandler())
