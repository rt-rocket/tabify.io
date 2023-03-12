import express from "npm:express@4.18.2"
import cors from "npm:cors@2.8.5"
import routes from "./api/session_routes.ts"

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

app.use((req: express.Request, res: express.Response, next: express.next) => {
    // CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
})

// Routes
app.use('/', routes)
app.get('/', (_req: express.Request, res: express.Response) => {
    res.send("Welcome to Deno")
})

// Error Handling
app.use((res: express.Response) => {
    return res.status(404).json({
        message: new Error('Routes not found').message
    })
})

app.listen(5173)