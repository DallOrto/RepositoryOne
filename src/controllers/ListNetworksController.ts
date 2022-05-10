import { Request, Response } from "express";
import { ListNetworksService } from "../services/ListNetworksService";


class ListNetworksController {
    async handle(request: Request, response: Response) {
        const listNetworksService = new ListNetworksService();

        const networks = await listNetworksService.execute();

        
        return response.json(networks);
        
    }
}


export { ListNetworksController };