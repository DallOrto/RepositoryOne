import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { StudentsRepositories } from "../repositories/StudentsRepositories";

interface IStudentRequest {
    // ---  matricula: string; ---DÚVIDA-----
    name: string;
    motherName: string;
    fatherName: string;
    address: string;
    login: string;
    password: string;
    admin?: boolean;
  
};

interface IStudentResponse {
    id: string;
    matricula: string;
    name: string;
    motherName: string;
    fatherName: string;
    address: string;
    login: string;
    admin: boolean;
    created_at: Date;
    updated_at: Date;

};

class CreateStudentService {
    async execute({/*matricula,*/ name, motherName, fatherName, address, login, admin = false, password}: IStudentRequest) {
        const studentsRepository = getCustomRepository(StudentsRepositories);
    
        // === ESCREVER A LÓGICA DE SERVIÇO AQUI ===

        const passwordHash = await hash(password, 8)
    

        const student = studentsRepository.create({
            /*matricula,*/
            name, 
            motherName, 
            fatherName, 
            address, 
            login, 
            admin,
            password: passwordHash
        });

        const iStudent: IStudentResponse = {
            id: student.id,
            matricula: student.matricula,
            name: student.name,
            motherName: student.motherName,
            fatherName: student.fatherName,
            address: student.address,
            login: student.login,
            admin: student.admin,
            created_at: student.created_at,
            updated_at: student.updated_at
        }

        await studentsRepository.save(iStudent)

        return iStudent 


    }
}


export { CreateStudentService };