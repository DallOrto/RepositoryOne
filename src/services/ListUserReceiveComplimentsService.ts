import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";




class ListUserReceiveComplimentsService {

    async execute(user_id: string) {
        const complementsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complementsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: [
                "userSender", "userReceiver", "tag"
            ]
        });

        return compliments;
    }
}

export { ListUserReceiveComplimentsService }