import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("students")
class Student {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    enrollment: string;
    
    @Column()
    name: string;

    @Column()
    motherName: string;

    @Column()
    fatherName: string;

    @Column()
    address: string;

    @Column()
    login: string;
  
    @Column({ select: false })
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }

    }

}

export { Student } ;
