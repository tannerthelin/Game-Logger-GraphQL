# :space_invader: Video Game Logger - GraphQL Server

A simple **GraphQL server with JavaScript (Node.js)** based on  [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/). Allows the user to store a database of the video games they've recently played, the system they played on, and the date they completed it. :video_game:

<br/><br/>

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

<br/><br/>

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

<br/><br/>

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

<br/><br/>

## Other Requirements
• **Use Prisma as your data modeling tool -** :link: [See Prisma Code](https://github.com/tannerthelin/Game-Logger-GraphQL/tree/master/prisma)

• **Docker-based PostgreSQL as your data store -** :link: [See Postgres in scripts](https://github.com/tannerthelin/Game-Logger-GraphQL/blob/master/package.json)

• **Your datastore must contain at least 25 items -** :link: [Check out my data](https://github.com/tannerthelin/Game-Logger-GraphQL/blob/master/prisma/data/games.json)

• **Your app will be deployable locally using Docker and will have seed data entered into the datastore -** :link: [View npm scripts in the package.json](https://github.com/tannerthelin/Game-Logger-GraphQL/blob/master/package.json)

