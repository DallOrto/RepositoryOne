import { Request, Response } from "express";
import { CreateStudentService } from "../services/CreateStudentService";

class CreateStudentController {
    
    async handle(request: Request, response: Response) {
        const { name, motherName, fatherName, address, login, password} = request.body;
        
        const createStudentService = new CreateStudentService();

        const student = await createStudentService.execute({name, motherName, fatherName, address, login, password});

        return response.json(student);
    }

}


export { CreateStudentController };