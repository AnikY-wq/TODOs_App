
export const dbConfig = {
    mongoUri: process.env.MONGO_URI,
    database_name: process.env.TO_DO_DB,
    collections: {
        userCollection: process.env.USER_COLLECTION
    }
}