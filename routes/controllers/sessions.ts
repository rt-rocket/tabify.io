import express from "npm:express@4.18.2"
import sql from "../db.ts"


const postSession = async (req: express.Response, res: express.Request) => {
    try {
        // note: unpacking ({} = req.body) returns undefined
        const id = req.body.id
        const tabLink = req.body.tab_link
        const _newTable = await sql`CREATE TABLE IF NOT EXISTS user_info(id SERIAL, tab_link TEXT UNIQUE NOT NULL)`
        const newLink = await sql`INSERT INTO user_info(id, tab_link) VALUES(${id}, ${tabLink})`
        res.status(200).json(newLink)
    }
    catch (err) {
        console.error(err.message)
    }
    finally {
        sql.end() // may affect API runtime
    }
}

const getSession = async (_req: express.Response, res: express.Request) => {
    try {
        const data = await sql`SELECT * FROM user_info`
        res.status(200).json(data[0])
    }
    catch (err) {
        console.error(err.message)
    }
}

const getSessions = async (_req: express.Response, res: express.Request) => {
    try {
        const data = await sql`SELECT * FROM user_info`
        res.status(200).json(data)
    }
    catch (err) {
        console.error(err.message)
    }
}

export default { postSession, getSession, getSessions }