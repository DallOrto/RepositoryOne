import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { IUserIdWithRequest } from "./ensureAuthenticated";



export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const { user_id } = request as IUserIdWithRequest;
    // Verificar se o usuário é admin.

    const usersRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await usersRepositories.findOne(user_id);



    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    });
}