import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Network } from "./Network";

@Entity("schools")
class School {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    network_id: string;

    @JoinColumn({name: "network_id" })
    @ManyToOne(()=> Network)
    network: Network;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { School };