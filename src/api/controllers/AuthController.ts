import { Request, Response } from "express";
import { AuthService } from "../services";
import JsonResponse from "@/lib/json-response";
import { HandleError, ValidateRequest } from "@/decorators";
import { AuthRequest } from "../contracts/request";

class AuthController {
  constructor(private authService: AuthService) {}

  @HandleError
  @ValidateRequest(AuthRequest.login)
  public async login(req: Request, res: Response) {
    const user = await this.authService.login(req.body.email, req.body.password);

    return new JsonResponse(res).success().withData(user).send();
  }

  @HandleError
  public async logout(req: Request, res: Response) {
    await this.authService.logout(undefined);

    return new JsonResponse(res).success().send();
  }
}

export default AuthController;