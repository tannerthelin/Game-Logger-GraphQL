# :space_invader: Video Game Logger - GraphQL Server

A simple **GraphQL server with JavaScript (Node.js)** based on  [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/). Allows the user to store a database of the video games they've recently played, the system they played on, and the date they completed it. :video_game:

## How to use

### 1. Download example & install dependencies

Install the npm dependencies in this project:

```
cd into project
npm install
```

### 2. Run each of these npm scripts in package.json

```
npm run launchDocker
npm run createDB
npm run generate
npm run postinstall
npm run seed
npm run dev
```
Then, open another tab in your terminal and run

```
npm run start
```

### 3. Open in browser

* Open [http://localhost:4000](http://localhost:4000) in your browser to explore the GraphQL Playground.
* Then open to [http://localhost:5555](http://localhost:5555) in your broswer to view Prisma Studio.

### Prisma as your data modeling tool
:link: [See Prisma Code](https://github.com/tannerthelin/GraphQL-API-Node-Server/tree/master/prisma)

### Docker-based PostgreSQL, MySQL, or MongoDB as your data store
:link: [See Postgres in scripts](https://github.com/tannerthelin/GraphQL-API-Node-Server/blob/master/package.json)

## Queries

#### :file_folder: Retrieve all Games
```graphql
query getAllGames {
  Games {
    id
    updatedAt
    title
    system
    date_completed
	}
}
```

#### :page_with_curl: Retrieve a single Game
_This particular query should return the game "Hollow Knight"_
```graphql
query getGame {
  Game (id: "ck9bzwyoe00008nmeliu3tlf1") {
    title
    system
    date_completed
  }
}
```

#### :mag: Filter games based on a search
_This particular query is for the word "Call" in "Call of Duty"_
```graphql
query filterGames {
  filterGames (searchstring: "Call") {
    title
    system
    date_completed
  }
}
```

## Mutations

#### :heavy_plus_sign: Create Game
_This mutation will create a new game entry for Starcraft II_
 ```graphql
mutation createGame {
 createGame(
   title:"Starcraft II", 
   system: "PC",
   date_completed: "March 12, 2020"
 ) {
   id
   updatedAt
   title
   system
   date_completed
 }
}
```
#### :pencil2: Update Game
_This particular query will add the latest expansion onto the "World of Warcraft" item's title_
```graphql
mutation updateGame {
  updateGame(
    id: "ck9bzwyou00018nme9iuz9p0i",
    title:"World of Warcraft: Battle for Azeroth", 
    system:"PC",
    date_completed: "April 12, 2020"
  ) {
    id
    updatedAt
    title
    system
    date_completed
  }
}
```


### At least 1 Mutation resolver allowing users to delete an item.
#### :wastebasket: Delete Game
_This particular query will delete the game "Hollow Knight" from the list_
```graphql
mutation deleteOneGame {
  deleteOneGame(where: {
  id: "ck9bzwyoe00008nmeliu3tlf1"})
  {
    id
    title
    system
    date_completed
  }
}
```

### Your datastore will contain at least 25 items
* You can see the number of items in [Primsa Studio](http://localhost:5555/) or the [Seed File](https://github.com/tannerthelin/GraphQL-API-Node-Server/blob/master/prisma/seed.js), and the data being seeded in the [People.json](https://github.com/tannerthelin/GraphQL-API-Node-Server/blob/master/prisma/data/people.json)

### Your app will be deployable locally using Docker and will have seed data entered into the datastore.
* This can be seen in the npm scripts above and in the [package.json](https://github.com/tannerthelin/GraphQL-API-Node-Server/blob/master/package.json)

