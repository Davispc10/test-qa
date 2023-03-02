*** Settings ***
Library             SeleniumLibrary
Library             ConfiguracaoBrowser.py
Variables           resource/setup.yml
Library             LibraryHelper.py
Library             FakerLibrary    locale=pt_BR
Resource            bdd_keywords.robot


*** Variables ***
${BROWSER}      Chrome
${G_OS}         Web

*** Keywords ***
Que Esteja No Site
    Go to                                ${URL}
    Maximize Browser Window
    Set Selenium Implicit Wait	         30

Fechando O Browser
    Set Screenshot Directory       output/allure
    Capture Page Screenshot        EMBED
    Close All Browsers

Configuração Do Browser
        Open Browser     about:blank         ${BROWSER}
        Go to                                ${URL}
        Maximize Browser Window
        Set Selenium Implicit Wait	         ${WAIT_MAX}
Configuração Do Browser Chrome
        ${chrome_options}=       ch_instancia_start    headless=False
        Open Browser       url=${URL}     browser=Google Chrome      options=${chrome_options}
        Go to                                ${URL}
        Maximize Browser Window
        Set Selenium Implicit Wait	         ${WAIT_MAX}
Configuração Do Browser Edge
        ${chrome_options}=       edge_instancia_start
        Open Browser       url=${URL}     browser=Edge      options=${chrome_options}
        Go to                                ${URL}
        Maximize Browser Window
        Set Selenium Implicit Wait	         ${WAIT_MAX}
Configuração Do Browser Firefox
        ${profile_path}=     ff_instacia_start
        Open Browser     url=${URL}        browser=Headless Firefox       ff_profile_dir=${profile_path}
        Go to                                ${URL}
        Maximize Browser Window
        Set Selenium Implicit Wait	         ${WAIT_MAX}