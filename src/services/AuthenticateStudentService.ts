import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { StudentsRepositories } from "../repositories/StudentsRepositories";


interface IStudentAuthenticateRequest {
    login: string;
    password: string;
}

class AuthenticateStudentService {
    async execute({ login, password }: IStudentAuthenticateRequest) {
        const studentsRepository = getCustomRepository(StudentsRepositories);

        //Verificar se o login existe
        const student = await studentsRepository.findOne(
            {
                login,
            },
            {
                select: ["id","login", "password"]
            }
        )

        if (!student) {
            throw new Error("Email/Password incorrect")
        }

        //Verificar se senha está correta
        const passwordMatch = await compare(password, student.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        //Gerar token
        const token = sign(
            {
                id: student.id,
                loguin: student.login
            }, "81ad717aad892a12c0ec460999f47b2d",
            {
                subject: student.id,
                expiresIn: "1d"
            }
        )

        return token;
    }
}



export { AuthenticateStudentService }