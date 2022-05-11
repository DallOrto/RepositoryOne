import { Request, Response } from "express";
import { CreateSchoolService } from "../services/CreateSchoolService";

class CreateSchoolController {
    
    async handle(request: Request, response: Response) {
        const {name, network_id} = request.body
        const createSchoolService = new CreateSchoolService();

        const school = await createSchoolService.execute({
            name,
            network_id
        });

        return response.json(school)
    }

}



export { CreateSchoolController };