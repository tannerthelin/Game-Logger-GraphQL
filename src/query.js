import { idArg, queryType, stringArg } from 'nexus';

export const Query = queryType({
    definition(t) {
        t.field('Game', {
            type:'Game',
            nullable: true,
            args: { id: idArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.prisma.game.findOne({
                    where: {
                        id,
                    }
                })
            }
        })

        t.list.field('Games', {
            type: 'Game',
            resolve: (parent, arg, ctx) => {
                return ctx.prisma.game.findMany()
            }
        })

        t.list.field('filterGames', {
            type: 'Game',
            args: {
                searchstring: stringArg({ nullable: true }),
            },
            resolve: (parent, { searchstring }, ctx) => {
                return ctx.prisma.game.findMany({
                    where: {
                        OR: [
                            { title: {contains: searchstring }},
                            { system: {contains: searchstring }},
                            { date_completed: {contains: searchstring }}
                        ],
                    },
                })
            }
        })
    }
})