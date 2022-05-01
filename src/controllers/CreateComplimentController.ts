import { Request, Response } from "express";
import { IUserIdWithRequest } from "../middlewares/ensureAuthenticated";
import { CreateComplimentService } from "../services/CreateComplimentService";



class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const { tag_id, user_receiver, message } = request.body;
        const { user_id } = request as IUserIdWithRequest;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender: user_id,
            user_receiver,
            message
        });

        return response.json(compliment);
    }
}



export { CreateComplimentController }