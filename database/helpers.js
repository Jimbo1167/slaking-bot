const db = require('../database');

const loadCollection = (name, options, data) => {
    console.log(`Creating and loading ${name} collection`);
    const collection = db.addCollection(name, options);
    data.forEach((record) => {
        collection.insert(record);
    });

    return collection;
};

module.exports = {
    loadCollection
};
