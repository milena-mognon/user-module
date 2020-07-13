<h3 align="center">
<img alt="dev" width="400px" src="./.github/undraw_programmer_imem.svg" />
</h3>
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
- Envio de notificações;
- Cache

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
- Mailtrap - (Serviço SMTP fake)
- SES - (Serviço de envio de email - AWS)
- Multer - (Lib para upload de arquivos)
- Tsyringe - (Lib para injeção de dependências)
- Postgres - (Banco de dados relacional)
- TypeORM - (ORM)
- Json Web Token (técnica para autenticação)
- MongoDB - (Banco de dados não relacional)
- Redis - (Banco de dados chave-valor)
- S3 - (Serviço de armazenamento - AWS)
- Celebrate - (Middleware de validação)
- ...

\* Serviços pagos da AWS, apenas para sistema em produção.

## 🚀 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta do projeto pelo terminal;
3. Rode `yarn` para instalar as dependências;
4. Crie um arquivo **.env** (use **.env.example** como modelo) e modifique o valor das variáveis;
5. Rode `yarn dev:server` para iniciar o servidor de desenvolvimento;

### ⚙ Configuração do banco de dados

1. Crie uma base de dados do Postgres;
2. No arquivo **ormconfig.json** modifique as credenciais (host, database, user, password);
3. Rode `yarn typeorm migration:run` para rodas as migrations;

### 📧 Configuração para envio de email

1. No arquivo .env, escolha o provider de email (ethereal, mailtrap ou ses).
   Ex: MAIL_DRIVER=ethereal;
2. Se necessário, descomente e/ou altere as credenciais;

### 🔔 Configurações para envio de notificações

1. Crie uma base de dados do MongoDB
2. No arquivo **ormconfig.json** modifique o nome database e host, se necessário.

#### Exemplo de código para envio de notificações

Adiciona em uma classe através de injeção de dependência

```ts
constructor(
    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}
```

Envia a notificação passando os dados necessários.

```ts
await this.notificationsRepository.create({
  recipient_id,
  content: `Conteúdo da notificação`,
});
```

OBS: Os dados enviados podem váriar, basta modificar no modulo de notifications (Schema, Repository, etc).

### ⚙ Configuração para salvar cache

1. Rodar o Redis;
2. Alterar as credenciais no arquivo .env (REDIS_HOST, REDIS_POST, REDIS_PASS);

#### Exemplo de código para salvar cache

Adiciona em uma classe através de injeção de dependência

```ts
constructor(
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}
```

Salva algum valor em cache:

```ts
await this.cacheProvider.save(`nome-da-key`, value);
```

Deleta/Invalida o cache:

```ts
await this.cacheProvider.invalidate('nome-da-key');
await this.cacheProvider.invalidatePrefix('nome-da-key:');
```

Recupera os dados:

```ts
let users = await this.cacheProvider.recover<User[]>(`nome-da-key`);
```

### 🧪 Testes

1. Rode `yarn test` para executar os testes;
