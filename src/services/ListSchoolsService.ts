import { getCustomRepository } from "typeorm";
import { SchoolRepositories } from "../repositories/SchoolRepositories";
import { classToPlain } from "class-transformer";


class ListSchoolsService {
    async execute() {
        const schoolsRepositories = getCustomRepository(SchoolRepositories);

        const schools = await schoolsRepositories.find();

        return classToPlain(schools);
    }

}

export { ListSchoolsService };