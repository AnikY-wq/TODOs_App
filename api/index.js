import express from "express"
import "./loadEnvironment.js"
import cors from "cors"
import { connectMongoDB } from "./db/connectMongoDB.js";
import { toDoRouter } from "./app/router.js";

const app = express();
app.use(express.json({ limit: 1000000000 }))
app.use(
    express.urlencoded({
        limit: '1000mb',
        extended: true,
        parameterLimit: 1000000000,
    })
)
app.use(cors())
app.use('/api', toDoRouter)

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the application
const start = async () => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server is running on port ${process.env.APP_PORT}`);
    })
    try {
        // Connecting DB
        console.time('initDB')
        console.log("Connecting to MongoDB/Atlas Started");
        await connectMongoDB();
        console.timeEnd('initDB')
    } catch (error) {
        console.error("Error while connecting MongoDB - ", error);
    }
}

start();