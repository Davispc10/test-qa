# <h1 align="center">Swag Labs</h1>

> Automação das do Front-end do Swag Labs realizada com o Robot Framework.

> Link do Swag Labs: [Swag Labs](https://www.saucedemo.com/)

## Como instalar e rodar a aplicação

+ Instalar o Python e colocar nas variáveis de ambiente;

+ Para instalar o Robot Framework é preciso digitar no prompt de comando: pip install robotframework;

+ Para instalar a biblioteca do Selenium é preciso digitar no prompt de comando: pip install robotframework-seleniumlibrary;

+ As configurações do projeto foram feitas para o chrome, com isso é preciso baixar o [Chrome Driver](https://chromedriver.chromium.org/downloads) com a versão igual a do seu navegador (basta olhar nas configurações do chrome);

+ Extrair o arquivo e colocar dentro da pasta Scripts do python (esse caminho já foi configurado nas variáveis de ambiente com a instalação do python);

+ Instalar o Visual Studio code e adicionar as extensões "Robot Framework Language Server" e "Python";

+ Abrir o caminho \tests\end-to-end\web\dois_ponto_zero\swag_tests.robot e clicar no play ao lado do nome "Teste de Cadastro Swag com Sucesso";

+ O teste será executado e um log.html será criado para consulta.







# Dinheirow - Teste de QA

Olá! Tudo bem?

Nós estamos sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente bom senso!
Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

Vamos ao teste!

## Carinho de compras

Queremos que faça uma automação end-to-end de um fluxo de compras. Para isso você poderá usar alguma ferramenta que auxilie nisso para automatização no fluxo como o Cypress por exemplo.

Site: https://www.saucedemo.com

💻 Fluxo:
- O script terá que acessar a página;
- Realizar login com username incorreto;
- Realizar com password incorreto;
- Fazer o login utilizando o usuário padrão (standard_user);
- Adicionar ao carrinho a mochila (Backpack) e a blusa preta (Bolt T-Shirt);
- Ir no carrinho;
- Remover a blusa;
- Adicionar o item mais caro;
- Ir no carrinho;
- Fazer o checkout, preencher as informações;
- Finalizar o pedido e voltar a página principal dos itens.

💻 Tecnologia
- Ferramenta end-to-end (De preferência Cypress);
- Documentação;
- Utilização de boas práticas como page objects e uso do cucumber serão um 
diferencial na análise da automação.

## Por onde começo?
Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome (ex: nome_sobrenome), para podermos indentificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch master do nosso repositório. Vamos receber e fazer a avaliação de todos.

Boa sorte! :)
