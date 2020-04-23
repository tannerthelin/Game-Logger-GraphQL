# :space_invader: Video Game Logger - GraphQL Server

A simple **GraphQL server with JavaScript (Node.js)** based on  [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/). Allows the user to store a database of the video games they've recently played, the system they played on, and the date they completed it. :video_game:

<br/>

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
<br/>

#### :page_with_curl: Retrieve a single Game
_Copy an id from the previous query and paste it into this query to retrieve the item_
```graphql
query getGame {
  Game (id: "<INSERT ID>") {
    title
    system
    date_completed
  }
}
```  
<br/>

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
<br/>

#### :pencil2: Update Game
_This particular query will update an item. You just need to copy and paste the id, and then fill in the field and the value you want to change it to._
```graphql
mutation updateGame {
  updateGame(
    id: "<INSERT ID>"
    <FIELD>: "<INSERT VALUE>"
  ) {
    id
    updatedAt
    title
    system
    date_completed
  }
}
```  
<br/>

### At least 1 Mutation resolver allowing users to delete an item.
#### :wastebasket: Delete Game
_This particular query will delete the game "Hollow Knight" from the list_
```graphql
mutation deleteOneGame {
  deleteOneGame(where: {
  id: "<INSERT ID>"})
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

