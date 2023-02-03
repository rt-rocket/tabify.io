import express from "npm:express@4.18.2"
import cors from "npm:cors@2.8.5"
import sql from "./db.ts"

const app = express()

// Middleware
app.use(cors())
app.use(express.json()) // req.body

// CREATE
app.post("/tabs", async (req: express.Response, res: express.Request) => {
    try {
        const { tabLink } = req.body
        const _newTable = await sql`CREATE TABLE IF NOT EXISTS user_info(id SERIAL, tab_link TEXT UNIQUE NOT NULL)`
        const newLink = await sql`INSERT INTO user_info(tab_link) VALUES(${tabLink})`
        console.log(tabLink)
        res.json(newLink)
    }
    catch (err) {
        console.error(err.message)
    }
    finally {
        sql.end() // may affect API runtime
    }
})

// READ


// UPDATE

// DELETE

app.get("/", (_req: express.Request, _res: express.Response) => {
    _res.send("Welcome to Deno")
    console.log("Server starting on 5173")

})

app.listen(5173)