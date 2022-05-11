import { Request, Response } from "express";
import { AuthenticateStudentService } from "../services/AuthenticateStudentService";


class AuthenticateStudentController {
    async handle(request: Request, response: Response) {
        const { login, password } = request.body

        const authenticateStudentService = new AuthenticateStudentService();

        const token = await authenticateStudentService.execute(
            {
                login,
                password
            }
        );

        return response.json({token});
    }
}



export { AuthenticateStudentController }