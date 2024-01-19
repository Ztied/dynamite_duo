const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ]
}

const villainDatabase = {
    villains: [
        {
            id: 1,
            name: "Denim Venim",
            power: "Water blasts"
        },
        {
            id: 2,
            name: "Undertaker",
            power: "Super strength"
        },
        {
            id:3,
            name: "Sally",
            power: "Mind control"
        }

    ],
   
}


export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return villainDatabase.villains.map(villain => ({...villain}))
}