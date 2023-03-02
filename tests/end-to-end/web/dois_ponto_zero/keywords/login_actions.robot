*** Settings ***
Resource                                   ../../../../global_keywords/web/baseTest.robot
Library                                    ../../../../global_keywords/web/utils.py

*** Keywords ***
Inicializar variaveis login
  ${login_pages_valor}=  get_page_atributes  login_pages
  Set Test Variable    ${login_pages}    ${login_pages_valor}

Login com sucesso
    Inicializar variaveis login
    Input text                             ${login_pages.input_login}                        ${USUARIO}
    Input text                             ${login_pages.input_senha}                        ${SENHA}
    Click Element                          ${login_pages.button_login}                       

Login com usuario incorreto
    Inicializar variaveis login
    Input text                             ${login_pages.input_login}                        ${USUARIOERRADO}
    Input text                             ${login_pages.input_senha}                        ${SENHA}
    Click Element                          ${login_pages.button_login}

Login com senha incorreta
    Inicializar variaveis login
    Input text                             ${login_pages.input_login}                        ${USUARIO}
    Input text                             ${login_pages.input_senha}                        ${SENHAERRADA}
    Click Element                          ${login_pages.button_login}

Validando Teste Com Login Com Sucesso
    Page Should Contain                    Sauce Labs Backpack

Validando Teste Com Login ou Senha Errado
    Page Should Contain                    Epic sadface: Username and password do not match any user in this service