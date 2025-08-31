import express from "express";
import { databaseManager } from "./src/database.js";
import { logger } from "./src/logger.js";

const app = express()
const db = new databaseManager()

function getIPv4(req) {
    let ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.ip;
    if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '')
    const ipv4Regex = /^(?:\d{1,3}\.){3}\d{1,3}$/;
    return ipv4Regex.test(ip) ? ip : 'Undefined';
}

app.use((req ,res , next)=>{logger.info(`${getIPv4(req)} ${req.method} ${req.url}`);next()});
app.use(express.static("public"))



app.use((req, res, next) => res.send({error: "Rota Não Existente"}));
app.listen(process.env.PORT, () => logger.info(`O Servidor Está Online: http://localhost:${process.env.PORT}`))