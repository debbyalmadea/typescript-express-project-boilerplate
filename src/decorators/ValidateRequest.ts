import { Request, Response } from "express";
import { AnyZodObject } from "zod";

function ValidateRequest(schema: AnyZodObject) {
    return function (target: any, context: ClassMethodDecoratorContext){
        if (context.kind !== "method") {
            throw new Error("HandleError decorator can only be applied to methods.");
          }
                  
        async function decoratedTarget(this: any, req: Request, res: Response) {
            const validatedReq = await schema.parseAsync(req) as {body: any, params: any, query: any};
            req.body = validatedReq.body;
            req.params = validatedReq.params;
            req.query = validatedReq.query;

            return target.call(this, req, res);
    
        }

        return decoratedTarget;
    }
}

export default ValidateRequest