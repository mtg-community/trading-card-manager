# Functions
Este pacote contém as [firebase functions](https://firebase.google.com/docs/functions) que será basicamente o backend que as aplicações front-end se comunicarão.
Estamos dividindo a camada de apresentação de duas formas: REST API e GraphQL API.
O motivo disto é também mostrar como clean architecture pode ser aplicada independente do codebase.
É sim uma solução _over-engineered_, porém essa é a graça de se ter side projects.

# GraphQL
O endpoint CAMINHO_PARA_O_APP/graphql é tanto o endpoint para uso como o endpoint do playground.
Versão de staging: https://us-central1-trading-card-manager-mtgx.cloudfunctions.net/graphql/

# REST
As rotas podem ser encontradas em `./functions/src/presentation/rest/routes`
Versão de staging: https://us-central1-trading-card-manager-mtgx.cloudfunctions.net/rest/

# Como iniciar a aplicação
- `npm install`
- `npm start`, isto irá rodar locamente as funções.

### Observação
Não é uma boa prática usar uma cloud function para tomar conta de todas as rotas de um app. O Indicado seria ter um endpoint por função, com o intuito de evitar lock-in decidimos por deixar assim.
Isto é, caso no futuro migremos de firebase functions para heroku, vai ser simples.
