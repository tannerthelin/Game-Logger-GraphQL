import { idArg, mutationType, stringArg, intArg } from 'nexus';

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.crud.deleteOneGame()

        t.field('createGame', {
            type: 'Game',
            args: {
                title: stringArg({ nullable: false }),
                system: stringArg({ nullable: false }),
                date_completed: stringArg({ nullable: false })
            },
            resolve: (parent, { title, system, date_completed }, ctx) => {
                return ctx.prisma.game.create({
                    data: {
                        title,
                        system,
                        date_completed
                    }
                })
            }
        })

        t.field('updateGame', {
            type: 'Game',
            args: { 
                id: idArg(),
                title: stringArg(),
                system: stringArg(),
                date_completed: stringArg()
            },
            resolve: (parent, { id, title, system, date_completed}, ctx) => {
                return ctx.prisma.game.update({
                    where: {
                        id
                    },
                    data: {
                        title,
                        system,
                        date_completed
                    }
                })
            }
        })
    }
})