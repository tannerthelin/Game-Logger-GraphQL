import { objectType } from 'nexus';

const Game = objectType({
    name: 'Game',
    definition(t) {
        t.model.id()
        t.model.created()
        t.model.updatedAt()
        t.model.title()
        t.model.system()
        t.model.date_completed()
    }
})

export const Models = [
    Game
];