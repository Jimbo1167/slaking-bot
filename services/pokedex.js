const db = require(`${__dirname}/../database`);
const { loadCollection } = require(`${__dirname}/../database/helpers`);
const POKEMON_COLLECTION = 'pokemon';

let pokemonDb = db.getCollection(POKEMON_COLLECTION);
const loadDB = () => {
    if (! pokemonDb) {
        const options = {
            indices: ['dex', 'name']
        };
        const pokemonData = require(`${__dirname}/../data/pokemon.json`);
        pokemonDb = loadCollection(POKEMON_COLLECTION, options, pokemonData);
    }
};

loadDB();

const byDex = (dex) => (pokemonDb.findOne({ dex }));

const byName = (name) => (pokemonDb.findOne({ name }));

module.exports = {
    byDex,
    byName
};
