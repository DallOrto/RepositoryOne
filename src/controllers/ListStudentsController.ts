import { Request, Response} from "express";
import { ListStudentsService } from "../services/ListStudentsService";

class ListStudentsController {
    async handle(request: Request, response: Response) {
        const listStudentsService = new ListStudentsService();

        const students = await listStudentsService.execute();

        return response.json(students);
    }

}


export { ListStudentsController };
