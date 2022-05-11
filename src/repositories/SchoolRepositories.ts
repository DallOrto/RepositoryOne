import { EntityRepository, Repository } from "typeorm";
import { School } from "../entities/School";

@EntityRepository(School)
class SchoolRepositories extends Repository<School> {

}

export { SchoolRepositories };