import sqlite3 from "sqlite3";
import p from "path";
import { logger } from "./logger.js";

export class databaseManager{
    constructor(){
        this.path = p.resolve(process.cwd(), process.env.DATABASE)
        this.initializer()
    }

    initializer(){
        this.db = new sqlite3.Database(this.path,(err)=>{
            if(err) logger.error(`Erro No Banco De Dados: ${err}`)
            else {
                logger.info("Banco De Dados Inicializado!")
            }
        })
    }

    get database(){
        return this.db;
    }
}