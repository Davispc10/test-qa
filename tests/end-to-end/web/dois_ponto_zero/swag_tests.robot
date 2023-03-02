*** Settings ***
Library             SeleniumLibrary
Resource            ../../../global_keywords/web/baseTest.robot
Resource            keywords/login_actions.robot
Resource            keywords/swag_actions.robot
Variables           ../../../global_keywords/web/resource/setup.yml
Test Setup          Configuração Do Browser ${BROWSER}
Test Teardown       Fechando O Browser

*** Test Cases ***
Teste de Cadastro Swag Com Sucesso
    Dado 
    ...    Que Esteja No Site
    Quando 
    ...    Login com usuario incorreto
    ...    Login com senha incorreta
    ...    Login com sucesso
    ...    Cadastro Swag Com Sucesso
    Então 
    ...    Validando Teste Com Swag Com Sucesso
