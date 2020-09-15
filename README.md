# trading-card-manager

[![Greenkeeper badge](https://badges.greenkeeper.io/mtg-community/trading-card-manager.svg)](https://greenkeeper.io/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Links úteis
[SonarCloud](https://sonarcloud.io/organizations/mtg-community/projects)


## Arquitetura
O sistema consiste em quatro módulos: backend, core, mobile e web. Os módulos
 web e mobile seguem as camadas propostas por [Arquitetura Limpa](https://www.google.de/search?q=arquitetura+limpa&oq=arquitetura+limpa).  
A seguir, dois diagramas que representam a nossa arquitetura de duas maneira 
diferentes.
![module-explanation-a](https://github.com/mtg-community/trading-card-manager/blob/master/docs/assets/Clean-Architecture-Shared-Modules-part-one.png?raw=true)
![module-explanatiob](https://github.com/mtg-community/trading-card-manager/blob/master/docs/assets/Clean-Architecture-Shared-Modules-part-two.png?raw=true)

Ao comparar com diagrams tradicionais de arquitetura limpa, podemos explicar 
melhor como a nossa arquitetura se encaixa na original.  
![clean-architecture-diagram](https://user-images.githubusercontent.com/823150/49566359-a3644400-f92a-11e8-9486-e48003bfb7d7.png)

### Módulo Core:
Este módulo contem basicamente três diferentes conceitos que são brevemente explicados a seguir:
*Entidades*, as regras de negócio do sistema, estão contidas aqui.
*Casos de uso*, as regras de negócio da aplicação (web e mobile), descritos neste módulo na forma de interfaces ~~apesar de javascript não dar suporte a interfaces~~. Cabendo à aplicação criar e manter a implementação concreta.
*Adaptadores de Frameworks*, os módulos web e mobile precisam de "Glue code" para conectar os casos de uso com suas respectivas implementações e conectar as implementações com as framework usadas.

***Exemplos:***
A **entidade** usuário precisa conter um email associado, isto é uma regra independente de aplicação. Não importa como um usuário vai ser criado no sistema, ele vai precisar de um email. Ao tratar esta lógica de negócio na entidade a gente evita de ter que verificar o email do usuário a cada interação com a entidade.
O **caso de uso** de registrar um novo usuário é o mesmo, independente da plataforma que o usuário irá utilizar. As aplicações usam diferentes SDKs do Firebase para lidar com autenticação, Logo as implementações serão diferentes, mas isto não implica que a regra de negócio seja diferente.
Os casos de uso do modulo core endereçam este tipo de situação. Vale lembrar que existirão casos de uso que somente serão usados em cenários específicos da aplicação não existindo intersecção entre aplicações. Estes casos de uso devem ser mantidos dentro do domínio da aplicação.
Para **adaptar os casos de uso ao framework** redux, é necessário uma certa lógica adicional e um tanto quanto obscura. Certamente esta é a parte mais incomum e estranha em se adaptar Arquitetura Limpa e Reutilização de código à aplicações React-Redux.

### Módulo Backend:
O sistema irá necessitar de algumas funcionalidades em que necessitaremos de um backend. Apesar de seguirmos uma arquitetura backend-less suportado por Firebase, damos este nome ao módulo para facilitar o entendimento.

### Módulos Web e Mobile
Estes módulos contem uma aplicação Web e uma aplicação Mobile, o intuito não é que as aplicações sejam iguais e sim que eles sejam consistentes.
Ou seja, as UI/UX serão voltadas a plataforma em questão e podem existir diferentes funcionalidades em diferentes plataformas. Mas as premissas serão as mesma em ambas plataformas, e.g., se para trocar uma carta o usuário precisa primeiro confirmar seu e-mail. Ele não conseguirá realizar uma troca em ambas plataformas caso ele não confirme o email.
#### Organização interna dos módulos
Os dois módulos seguirão uma organização bem semelhante, apesar de ainda existir uma rampa um tanto íngreme para começar a contribuir, os módulos serão semelhantes e coesos o que facilitará contribuições externas.
Os módulos consistem em três camadas: `domain`, `data`, `presentation`.
##### domain
A camada de domínio é responsável por conectar o módulo core à aplicação, conectando os casos de usos com as respectivas implementações concretas e os frameworks com à aplicação. Caso algum caso de uso seja específico da aplicação aqui é o lugar.
##### data
A camada de dados é responsável por criar as conexões com o mundo exterior, todos os dados que são acessados ou enviados para fora da aplicação passam por aqui.

##### presentation
A camada de apresentação é aonde criamos a interface gráfica e por onde recebemos as interações com o usuário.
Esta camada deve conter o mínimo de lógica possível, sendo expressamente proibido se comunicar diretamente com a camada de dados e/ou conter regras de negócio, e.g., Ao fazer um cadastro o usuário precisa preencher o email, logo se faz necessário uma validação de campo, esta validação é uma regra de negócio do sistema e deve ser corretamente modelada.
