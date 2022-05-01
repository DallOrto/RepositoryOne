import { Request, Response } from "express";
import { IUserIdWithRequest } from "../middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";



class ListUserReceiveComplimentsController {

    async handle(request: Request, response: Response) {
        const { user_id } = request as IUserIdWithRequest;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}


export { ListUserReceiveComplimentsController };