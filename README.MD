<img alt="GoStack" src="./.github/undraw_programmer_imem.svg" />

<h3 align="center">
  Módulo de Usuário
</h3>

## 🚀 Sobre

Módulo de usuário com algumas funcionalidades prontas, tais como:

- Cadastro;
- Login;
- Atualização de perfil;
- Envio de email para reset de senha;
- Reset de senha;
- Upload de imagem (avatar do usuário);

Todo desenvolvido visando a fácil manutenção, boas práticas e facilidade em caso de troca de alguma das tecnologias.

Segue os principios do SOLID e DDD.

Funcionalidades testadas.

## 💻 Tecnologias e libs

- NodeJS - (Interpretador de JavaScript)
- ExpressJS - (Framework NodeJS)
- TypeScript - (Adiciona tipagem e alguns outros recursos ao JS)
- Eslint - (Ferramenta de análise de código)
- Prettier - (Code Formatter)
- Jest - (Estrutura de teste de JavaScript)
- Nodemailer - (Lib para envio de e-mails)
- Ethereal - (Serviço SMTP fake)
- Multer - (Lib para upload de arquivos)
- Tsyringe - (Lib para injeção de dependências)
- Postgres - (Banco de dados relacional)
- TypeORM - (ORM)
- Json Web Token (técnica para autenticação)
- ...

## 🚀 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta do projeto pelo terminal;
3. Rode `yarn` para instalar as dependências;
4. Rode `yarn dev:server` para iniciar o servidor de desenvolvimento;

### Configuração do banco de dados

1. Crie uma base de dados do Postgres;
2. No arquivo **ormconfig.json** modifique as credenciais (host, database, user, password);
3. Rode `yarn typeorm migration:run` para rodas as migrations;

### Testes

1. Rode `yarn test` para executar os testes;
