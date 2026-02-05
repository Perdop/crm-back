# Projeto Grupo 4 - Turma JavaScript 10

<p align="center">
  <img src="./.github/assets/logo.png" width="350" alt="Logo Path Educ">
</p>

<h1 align="center">📇 Path Educ</h1>

<p align="center">
  <strong>API NestJS para gestão de estudantes e bolsas</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
</p>

<br>

## 👥 Equipe de Desenvolvimento

Este projeto foi desenvolvido pela equipe **Grupo 4** da **Turma JavaScript 10**:

- **[Bruno Pinheiro de Carvalho](https://github.com/brunopdecarvalho)** - Membro
- **[Gabrieli Martins](https://github.com/imgabrielimartins)** - Membro
- **[Kauã Gabriel de Farias](https://github.com/kauafarias1)** - Membro
- **[Assis Pires Neto](https://github.com/Lancellot)** - Membro
- **[LiA](https://github.com/Lyliun)** - Membro
- **[Patrícia Souza](https://github.com/Patriciasdr)** - Membro
- **[Pedro](https://github.com/Perdop)** - Membro

## 📝 Descrição

O **Path Educ** é uma API construída com NestJS para gerenciamento de estudantes interessados em cursos e das bolsas de estudo disponíveis. O objetivo é oferecer uma base sólida para cadastro, consulta, atualização e vinculação de estudantes às bolsas, com integração a banco de dados relacional e boas práticas de desenvolvimento.

### 🎯 Objetivos do Projeto

- Centralizar o cadastro e gestão de estudantes
- Gerenciar bolsas de estudo com regras de validade e status
- Permitir o vínculo entre estudantes e bolsas
- Disponibilizar endpoints simples e organizados (CRUD)

### 📦 Entidades e Atributos

#### Entidade: Bolsa
- `id`: Identificador único da bolsa
- `nome`: Nome da bolsa
- `porcentagem`: Percentual de desconto aplicado
- `instituicao`: Instituição responsável pela bolsa
- `curso`: Curso específico (opcional)
- `validade`: Data de validade da bolsa
- `ativa`: Indicador se a bolsa está ativa
- `estudante`: Lista de estudantes vinculados (relacionamento)

#### Entidade: Estudante
- `id`: Identificador único do estudante
- `nome`: Nome completo
- `email`: E-mail válido
- `endereco`: Endereço do estudante
- `idade`: Idade
- `cursoInteresse`: Curso de interesse
- `ativo`: Indicador se o cadastro está ativo
- `bolsa`: Bolsa vinculada (relacionamento)

### ✨ Funcionalidades Principais (CRUD)

- ✅ **Create - Criar Registros**: Inserir novos estudantes e bolsas
- 📋 **Read - Listar Registros**: Consultar estudantes e bolsas disponíveis
- 🔍 **Read - Buscar por ID**: Visualizar detalhes de um estudante/bolsa específico
- 🔄 **Update - Atualizar Registros**: Modificar dados de estudantes e bolsas
- ❌ **Delete - Remover Registros**: Excluir estudantes e bolsas

### ✨ Funcionalidades Extra

- **Atualização de Status**: Atualizar status do bolsista/estudante (ativo ou inativo) 

## 🚀 Tecnologias Utilizadas

### Back-end
- **NestJS** - Framework progressivo para Node.js
- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Linguagem de programação tipada

### Banco de Dados
- **MySQL** - Sistema de gerenciamento de banco de dados relacional
- **TypeORM** - ORM para modelagem e consultas

### Ferramentas de Desenvolvimento
- **Insomnia** ou **Postman** - Clientes API para testes
- **VSCode** - IDE
- **Git** - Controle de versão
- **GitHub** - Hospedagem de código
- **Trello** - Organização e gestão de tarefas

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## 🔧 Executando a Aplicação

```bash
# Modo desenvolvimento
npm run start

# Modo desenvolvimento com watch (reinicia automaticamente)
npm run start:dev

# Modo desenvolvimento com .env
npm run start:env

# Modo debug
npm run start:debug

# Modo produção (após build)
npm run build
npm run start:prod
```

A aplicação estará disponível em `http://localhost:3000`.

## 🧪 Executando os Testes

```bash
# Testes unitários
npm run test

# Testes em watch
npm run test:watch

# Testes e2e (end-to-end)
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📁 Estrutura do Projeto

```
src/
├── app.module.ts           # Módulo raiz da aplicação
├── main.ts                 # Ponto de entrada da aplicação
├── bolsa/
│   ├── bolsa.module.ts     # Módulo de bolsas
│   ├── controllers/
│   │   └── bolsa.controllers.ts  # Controller de bolsas
│   ├── services/
│   │   └── bolsa.service.ts      # Service de bolsas
│   └── entities/
│       └── bolsa.entity.ts  # Entidade Bolsa (TypeORM)
└── estudante/
    ├── estudante.module.ts  # Módulo de estudantes
    ├── controllers/
    │   └── estudante.controller.ts   # Controller de estudantes
    ├── services/
    │   └── estudante.services.ts     # Service de estudantes
    └── entities/
        └── estudante.entity.ts       # Entidade Estudante (TypeORM)
```

## 🌐 Deploy

Para fazer o deploy da aplicação NestJS em produção, consulte a [documentação oficial de deployment](https://docs.nestjs.com/deployment).

### Deploy com Mau (AWS)

```bash
npm install -g @nestjs/mau
mau deploy
```

## 📚 Recursos e Documentação

- [Documentação do NestJS](https://docs.nestjs.com)
- [Discord da Comunidade NestJS](https://discord.gg/G7Qnnhy)
- [Cursos Oficiais NestJS](https://courses.nestjs.com/)
- [NestJS Devtools](https://devtools.nestjs.com)

## 🤝 Contribuindo

Este é um projeto colaborativo da turma. Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Desenvolvido com ❤️ pela equipe Grupo 4 - Turma JavaScript 10
