import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const games = fs.readFileSync('prisma/data/games.json')

function loadGames() {
  const list = JSON.parse(games)
  
 return list.map(game => {
    return {
      data: {
        title: game.title,
        system: game.system,
        date_completed: game.date_completed
      }
    }
  })
}

async function main() {
  try {
    const allGames = loadGames()
    for(let game of allGames) {
      await prismaClient.game.create(game)
      .catch(err => console.error(`Error trying to generate games `))
    } 
  } catch(err) {
    console.log(err)
  }
}


/* async function createGame() {
  try {
    await prismaClient.game.create({
      data: {
        name: 'Test Person',
        age: 100,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
  try {
    await createPerson()
  } catch(err) {
    console.log(err)
  }
} */

main()
.catch(e => console.error(e))
.finally(async () => {
  await prismaClient.disconnect()
})