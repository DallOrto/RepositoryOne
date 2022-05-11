import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { StudentsRepositories } from "../repositories/StudentsRepositories";

interface IStudentRequest {
    
    name: string;
    motherName: string;
    fatherName: string;
    address: string;
    login: string;
    password: string;
    
  
};


interface IStudentResponse {
    id: string;
    enrollment: string;
    name: string;
    motherName: string;
    fatherName: string;
    address: string;
    login: string;
    created_at: Date;
    updated_at: Date;

};

async function generateEnrollment() {
    const enrollment = Math.floor(Math.random() * (Math.floor(9999999999) - Math.ceil(1000000000))) + Math.ceil(1000000000);
    
    const students = getCustomRepository(StudentsRepositories);
    
    const enrollmentExists = await students.findOne({
        where:{enrollment}
        });
    
    if(enrollmentExists) { 
        return null 
    }
    return enrollment
        
    
}

async function getUniqueEnrollment() {
    let enrollment = generateEnrollment();

    while(enrollment === null) {

        enrollment = generateEnrollment();
             
    }
    
    return enrollment;
}




class CreateStudentService {
    async execute({name, motherName, fatherName, address, login, password}: IStudentRequest) {
        const studentsRepository = getCustomRepository(StudentsRepositories);
        

    
        // === ESCREVER A LÓGICA DE SERVIÇO AQUI ===

        const passwordHash = await hash(password, 8)
        
        const enrollment = (await getUniqueEnrollment()).toString();

        const student = studentsRepository.create({
            enrollment,
            name, 
            motherName, 
            fatherName, 
            address, 
            login,
            password: passwordHash
        });

        const iStudent: IStudentResponse = {
            id: student.id,
            enrollment: student.enrollment,
            name: student.name,
            motherName: student.motherName,
            fatherName: student.fatherName,
            address: student.address,
            login: student.login,        
            created_at: student.created_at,
            updated_at: student.updated_at
        }

        await studentsRepository.save(student)

        return iStudent 


    }
}


export { CreateStudentService };