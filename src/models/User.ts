import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

//lembre-se que quando colocar Entity ir até o tsconfig e habilitar "experimentalDecorators": true, "emitDecoratorMetadata": true, "strictPropertyInitialization": false, 
@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @CreateDateColumn()
    created_at: Date

    //caso o id não existir
    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { User } //sempre exporto para poder usar em outros modolos, exemplo quero usar no server.ts então tenho que exporta