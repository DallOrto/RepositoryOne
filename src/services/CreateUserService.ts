import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs"
import { stringify } from "uuid";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}


interface IUserResponse {
    id: string;
    name: string;
    email: string;
    admin: boolean;
    created_at: Date;
    updated_at: Date;
};

class CreateUserService {

    async execute({ name, email, admin = false, password }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        const iUser: IUserResponse = { 
            id: user.id ,
            name: user.name,
            email: user.email,
            admin: user.admin,
            created_at: user.created_at,
            updated_at: user.updated_at
        }

        await usersRepository.save(iUser);

        return iUser
    
        
        
    }
}

export { CreateUserService };