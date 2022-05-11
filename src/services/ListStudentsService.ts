import { getCustomRepository } from "typeorm";
import { StudentsRepositories } from "../repositories/StudentsRepositories";
import { classToPlain } from "class-transformer";

class ListStudentsService {
    async execute() {
        const studentsRepositories = getCustomRepository(StudentsRepositories);

        const students = await studentsRepositories.find();

        return classToPlain(students);

    }
}


export { ListStudentsService };