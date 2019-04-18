# DB migration
App utilitario para gerenciar as migrações de banco de dados das cartas. O app faz uso de [Prisma](http://prisma.io) para gerenciar
o schema do banco de dados e também popular os dados.

## Rodando localmente
- `npm install`
- `npm run server:start`, este comando irá subir o Prisma server e uma instancia do MongoDB na sua máquina
- `npm run prisma:seed`, este comando irá popular o banco de dados.
- Acesse http://localhost:4466/_admin e irá ver como o banco foi populado.

A cada mudança que fizer no schema (or arquivos *.prisma), voce precisa rodar novamente o comando `npm run prisma:deploy`,
que irá atualizar a representação do banco de dados.
Caso queira atualizar o banco de dados remoto, tu precisa ajudar o `docker-compose.yml` para apontar para o banco remoto.
