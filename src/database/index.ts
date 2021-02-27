import { Connection, createConnection, getConnectionOptions } from 'typeorm'

//para realizar os testes precisamos remover o createConnection para que não fazermos o teste em um banco de dados real !
// createConnection()

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions() //para pegar as informaçoes do orm config e assim nao dar conflito com o teste

    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite" : defaultOptions.database
        })
    )
}