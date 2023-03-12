import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";
import { load } from "https://deno.land/std@0.175.0/dotenv/mod.ts";
import { toInteger } from "https://deno.land/std@0.132.0/node/internal/buffer.mjs";

const configData = await load();

const sql = postgres(
  `postgres://${configData["USER"]}:${configData["USER"]}@${
    configData["HOSTNAME"]
  }:${configData["PORT"]}/${configData["DB"]}`,
  {
    host: configData["HOSTNAME"],
    port: toInteger(configData["PORT"]),
    database: configData["DB"],
    username: configData["USER"],
    password: configData["PASSWORD"],
  },
);

export default sql;
