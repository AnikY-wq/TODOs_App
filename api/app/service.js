import { ObjectId } from "mongodb";
import { getAllCollections, getCollection } from "../db/connectMongoDB.js";

export const getUsersService = async ({ id }) => {
    try {
        // call the database to get the users
        const users = await getCollection('users')
        if (id) {
            const query = { _id: new ObjectId(id) }
            return users.findOne(query)
        } else {
            return users.find().toArray()
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export const addUserService = async ({ user }) => {
    const collection = await getCollection('users');
    const res = await collection.insertOne(user)
    return res?.acknowledged
        ? { status: true, message: "User added successfully" }
        : { status: false, message: "Unexpected response - " + JSON.stringify(res) };
}

