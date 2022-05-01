import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}
export interface IUserIdWithRequest extends Request {
    user_id: string;

}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    //Receber o token
    const authToken = request.headers.authorization


    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")


    // Validar se token é válido
    try {
        const { sub } = verify(token, "a35c870eb82f64b9f9dcf01115bbc9bd") as IPayload;


        // Recuperar informações do usuário
        (request as IUserIdWithRequest).user_id = sub;


        return next();

    } catch (err) {
        return response.status(401).end();
    }



    return next();
}
