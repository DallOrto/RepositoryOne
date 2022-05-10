import { getCustomRepository } from "typeorm";
import { NetworkRepositories } from "../repositories/NetworkRepositories";

interface INetworkRequest {
    name: string;
}

class CreateNetworkService {
    async execute({name}: INetworkRequest) {
        const networkRepository = getCustomRepository(NetworkRepositories);

        if(!name) {
            throw new Error("Incorrect name")
        };
        
        const networkAlreadyExists = await networkRepository.findOne({
            name
        });

        if (networkAlreadyExists) {
            throw new Error("Network already exists");
        }

        const network = networkRepository.create({
            name
        });
    }
}


export { CreateNetworkService };