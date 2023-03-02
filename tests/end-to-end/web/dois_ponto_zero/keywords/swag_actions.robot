*** Settings ***
Resource                                   ../../../../global_keywords/web/baseTest.robot
Library                                    ../../../../global_keywords/web/utils.py

*** Keywords ***
Inicializar variaveis swag
  ${swag_pages_valor}=  get_page_atributes  swag_pages
  Set Test Variable    ${swag_pages}    ${swag_pages_valor}
  

Cadastro Swag Com Sucesso
    Inicializar variaveis swag
    Click Element                          ${swag_pages.button_add_to_cart_backpack}
    Click Element                          ${swag_pages.button_add_to_cart_tshirt}
    Click Element                          ${swag_pages.button_cart}
    Click Element                          ${swag_pages.button_remove_bolt_tshirt}
    Click Element                          ${swag_pages.button_continue_shopping}
    Click Element                          ${swag_pages.button_add_to_cart_fleece_jacket}
    Click Element                          ${swag_pages.button_cart}
    Click Element                          ${swag_pages.button_checkout}
    Input Text                             ${swag_pages.input_name}                              Vinicius
    Input Text                             ${swag_pages.input_last_name}                         Aires
    Input Text                             ${swag_pages.input_postal_code}                       37540000
    Click Element                          ${swag_pages.button_continue}
    Click Element                          ${swag_pages.button_finish}
    Click Element                          ${swag_pages.button_back_home}

Validando Teste Com Swag Com Sucesso
    Page Should Contain                    Sauce Labs Onesie




