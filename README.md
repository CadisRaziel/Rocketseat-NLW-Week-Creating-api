<img src="https://user-images.githubusercontent.com/70340981/109393571-50a74600-7901-11eb-952c-66149da1ecb7.png" "center"/>
          
 


## Comandos para começar

Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento. Foram implementados testes de integração.

Obs: Banco de dados é o Sqlite3, caso queira alterar, configure o arquivo ormconfig.json para seu banco de dados específico (Campo "database" é o nome do banco de dados no SGBD, neste projeto é local).

```bash
- cd nps-api
```

Instalando dependências

```bash
- yarn install
```

Criar o arquivo de database.sqlite do Sqlite3, onde ficaram armazenados as tabelas da API

```bash
- yarn add sqlite3
```

Criando tabela das migrations do Sqlite3 por meio do cli do TypeOrm

```bash
- yarn typeorm migration:run
```

Inicializando uma instância local (Script configurado no package.json)

```bash
- yarn dev
```

## Testes

Para testar se instalou a aplicação corretamente e se passa em todos os testes de integração, utilize o comando:

```bash
- yarn test
```


## instrutora: Daniele Leão Evangelista
