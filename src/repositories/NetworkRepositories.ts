import { EntityRepository, Repository } from "typeorm";
import { Network } from "../entities/Network";

@EntityRepository(Network)
class NetworkRepositories extends Repository<Network> { }

export { NetworkRepositories };