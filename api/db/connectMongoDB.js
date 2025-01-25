import { MongoClient } from 'mongodb';
import { dbConfig } from './dbConfig.js';

let client;
let db;

export async function connectMongoDB() {
    if (!client) {
        client = new MongoClient(dbConfig.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            await client.connect();
            console.log("Successfully connected to MongoDB/Atlas");
            db = client.db(dbConfig.database_name);
        } catch (error) {
            console.error(error.stack);
            client = null;
        }
    }
    return db;
}

export async function getAllCollections() {
    try {
        const db = await connectMongoDB();
        const collections = await db.listCollections().toArray();
        return collections;
    } catch (error) {
        console.error(error.stack);
    }
}

export async function getCollection(collectionName) {
    try {
        const db = await connectMongoDB();
        const collection = db.collection(collectionName);
        return collection;
    } catch (err) {
        console.error(err.stack);
    }
}

export async function createCollection(collectionName) {
    try {
        const db = await connectMongoDB();
        await db.createCollection(collectionName);
        return `${collectionName} created successfully`;
    } catch (err) {
        console.error(err.stack);
    }
}