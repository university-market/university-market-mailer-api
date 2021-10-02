# :email: university-market-mailer-api
Projeto de **serviço de e-mail** utilizado pela API da plataforma University Market.

## Conteúdo

* [Sobre](#about)
* [Requisitos](#requirements)
* [Instalação](#installation)
* [Tecnologias](#technologies)

<div id='about'/> &nbsp;

## :pushpin: Sobre

Este repositório refere-se ao **serviço de e-mail** do projeto University Market. <br>
Leia mais sobre este projeto no [repositório de apresentação](https://github.com/university-market/university-market).

<div id='requirements'/> &nbsp;

## :pushpin: Requisitos

>*Estes requisitos são direcionados ao desenvolvedores do projeto*

- [x] [NodeJs](https://nodejs.org/en/) instalado (LTS version) - necessário para o gerenciamento de pacotes da aplicação, com `npm` (*Node Package Manager*)
- [x] IDE / Editor de texto - recomenda-se o [Visual Studio Code](https://code.visualstudio.com/)

### Requisitos específicos para Windows

Caso seu sistema operacional seja Windows, talvez alguns recursos adicionais sejam necessários:

> Chocolatey ou qualquer outro gerenciador de pacotes para Windows - **não é necessário**, utilize apenas o `npm`

<div id='installation'/> &nbsp;

## :pushpin: Instalação

>*Observe atentamente os [requisitos](#requirements) necessários para poder executar, em modo de desenvolvedor, a aplicação no seu computador*

* Clone este projeto
  ```bash
  git clone https://github.com/university-market/university-market-mailer-api.git
  ```
* Defina as variáveis de ambiente do projeto de acordo com o exemplo
  - Exemplos em `src/config/environment.example.js` e `src/config/environment_email.example.js`
* Dentro do repositório clonado do projeto, abra um terminal/cmd e siga as seguintes instruções:

:one: Instale as dependências do projeto
```bash
npm install
```
:two: Acesse o diretório onde está o entry point do servidor
```bash
cd ./src
```
:three: Execute o projeto (porta default: `3000`)
```bash
node server.js
```

<div id='technologies'/> &nbsp;

## :pushpin: Tecnologias

Este serviço é desenvolvido sobre as seguintes tecnologias:

![nodejs](assets/technologies/nodejs.jpg)

- [x] NodeJS
- [x] Express - Framework para NodeJS
- [x] EJS e Handlebars - Renders para templates dinâmicos
- [x] Nodemailer - Biblioteca/Camada de abstração da interface de comunicação via SMTP
