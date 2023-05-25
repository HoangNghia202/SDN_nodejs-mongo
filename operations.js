const assert = require('assert');

// CREATE
exports.insertDocument = function (db, data, collectionName) {
    const collection = db.collection(collectionName);
    return collection.insertOne(data);
}

// READ
exports.findDocuments = function (db, collectionName,) {
    const collection = db.collection(collectionName);
    return collection.find({}).toArray();
}

// UPDATE
exports.updateDocument = function (db, data, update, collectionName) {
    const collection = db.collection(collectionName);
    return collection.updateOne(data, { $set: update }, null);
}

// DELETE
exports.deleteDocument = function (db, collectionName, data) {
    const collection = db.collection(collectionName);
    return collection.deleteOne(data);
}

