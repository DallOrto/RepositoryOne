import { EntityRepository, Repository } from "typeorm";
import { Student } from "../entities/Student";

@EntityRepository(Student)
class StudentsRepositories extends Repository<Student> { }

export { StudentsRepositories };