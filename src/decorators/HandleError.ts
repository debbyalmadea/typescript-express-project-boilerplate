import errorHandlers from "@/lib/error-handlers";
import { Request, Response } from "express";

function HandleError (target: any, context: ClassMethodDecoratorContext){
  if (context.kind !== "method") {
    throw new Error("HandleError decorator can only be applied to methods.");
  }
    async function decoratedTarget(this: any, req: Request, res: Response) {
      try {
        const result = await target.call(this, req, res);
        return result;
      } catch (error) {
        errorHandlers.handle(res, error);
      }
    }

    return decoratedTarget;
  }

export default HandleError