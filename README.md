# Testes _end-to-end_ com Cypress

Automação E2E.
Fluxo de compras no site [saucedemo](https://www.saucedemo.com/).

## Pré requisitos

Para executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (usei a versão `2.36.1` ao escrever este documento)
- [nodejs](https://nodejs.org/en/) (usei a versão `16.14.0` ao escrever este documento)
- NPM (eu usei a versão `9.4.1` ao escrever este documento)
- [Google Chrome](https://www.google.com/intl/pt-BR/chrome/) (usei a versão `111.0.5563.65 (Versão oficial) 64 bits` ao escrever este documento)

**Observação:** Ao instalar o nodejs, o NPM também é instalado automaticamente.

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar.)

## Executando os testes

Neste projeto, você pode executar testes nos modos interativo e headless.

### Modo headless

Execute `npm run cy:alltest` para executar todos os testes no modo headless usando uma janela de visualização da área de trabalho.

Execute `npm run cy:logintest` para executar somente o teste de login.

Execute `npm run cy:inventorytest` para executar somente o teste de inventory.

Execute `npm run cy:shoppingflowtest` para executar somente o teste de shopping flow.

### Modo interativo

Execute `npm run cy:open` para abrir o Cypress Test Runner para executar testes no modo interativo usando uma janela de visualização da área de trabalho.

Após abertura da janela do Cypress, clicar na opção `E2E Testing`, escolher o navegador e clicar no botão `Start E2E Testing in ...`, que será aberto o navegador escolhido na aba dos Specs.

Poderá clicar em um dos specs disponíveis para rodar individualmente ou clicar na opção `Run 3 specs` para rodar todos os testes de uma vez.