import { getCustomRepository } from "typeorm"
import { NetworkRepositories } from "../repositories/NetworkRepositories";
import { classToPlain } from "class-transformer";


class ListNetworksService {
    async execute() {
        const networksRepositories = getCustomRepository(NetworkRepositories);

        const networks = await networksRepositories.find();


        return classToPlain(networks);

    }
}


export { ListNetworksService };