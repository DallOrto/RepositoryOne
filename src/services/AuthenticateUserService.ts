import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepository.findOne(
            { email, },
            {
                select: ["id","email","password"]
            }
        )


        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        //Gerar token
        const token = sign({
            id: user.id,
            email: user.email
        }, "a35c870eb82f64b9f9dcf01115bbc9bd", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token;

    }
}

export { AuthenticateUserService }