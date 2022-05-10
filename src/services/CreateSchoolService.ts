import { getCustomRepository } from "typeorm";
import { SchoolRepositories } from "../repositories/SchoolRepositories";

interface ISchoolRequest {
    name: string;
    network: string;
}


class CreateSchoolService {
    async execute({name, network}: ISchoolRequest) {
        const schoolRepositories = getCustomRepository(SchoolRepositories);

        if(!name) {
            throw new Error("Incorrect name")
        };
 

        const school = schoolRepositories.create({
            name,
            network
        });

        await schoolRepositories.save(school);

        return school;
    }

}



export { CreateSchoolService };