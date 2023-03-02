# <h1 align="center">Swag Labs</h1>

> Automação Front-end do Swag Labs realizada com o Robot Framework.

> Link do Swag Labs: [Swag Labs](https://www.saucedemo.com/)

## Como instalar e rodar a aplicação

+ Instalar o [Python](https://www.python.org/downloads/) e colocar nas variáveis de ambiente;

+ Para instalar o Robot Framework é preciso digitar no prompt de comando: pip install robotframework;

+ Para instalar a biblioteca do Selenium é preciso digitar no prompt de comando: pip install robotframework-seleniumlibrary;

+ As configurações do projeto foram feitas para o chrome, com isso é preciso baixar o [Chrome Driver](https://chromedriver.chromium.org/downloads) com a mesma versão do navegador (basta olhar nas configurações do chrome);

+ Extrair o arquivo e colocar dentro da pasta Scripts do python (esse caminho já foi configurado nas variáveis de ambiente com a instalação do python);

+ Instalar o Visual Studio Code e adicionar as extensões "Robot Framework Language Server" e "Python";

+ Abrir a pasta do projeto com o Visual Studio Code;

+ Abrir o caminho \tests\end-to-end\web\dois_ponto_zero\swag_tests.robot e clicar no play ao lado do nome "Teste de Cadastro Swag com Sucesso";

+ O teste será executado e um log.html será criado para consulta.
