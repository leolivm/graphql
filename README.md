<h1 align="center">
    <img alt="prisma" title="prisma" src=".github/prisma.png" />
    <h3 align="center">GraphQL Prisma Testing API</h3>
</h1>

## :bookmark: About the project

Simple node authentication API made with [GraphQL](https://graphql.org/), and [Prisma ORM](https://www.prisma.io/)

## 💻 Getting started

### Requirements

**Clone the project and access the folder**

````bash
$ git clone https://github.com/leolivm/graphql.git && cd graphql

```bash
# Install the dependencies
$ yarn install
````

**Follow the steps below**

- Create a docker container

```bash
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Start prisma

```bash
$ npx prisma init
```

Run prisma migrations

```bash
$ npx prisma migrate dev --name init
```

Run the project

```bash
$ yarn dev
```

---

Made with 💜 by Leandro Martins 👋 [See my linkedin](https://www.linkedin.com/in/leandro-martins-0640921a4/)
