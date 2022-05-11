import { Request, Response } from "express";
import { ListSchoolsService } from "../services/ListSchoolsService";

class ListSchoolsController {
    async handle(request: Request, response: Response) {
        const listSchoolsService = new ListSchoolsService();

        const schools = await listSchoolsService.execute();

        return response.json(schools);
    }
}


export { ListSchoolsController };