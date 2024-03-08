const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js")

async function createDatabase(){

    try {
        const connection = await mysql.createConnection({
            host: databaseConfig.host,
            user: databaseConfig.user,
            password: databaseConfig.password,
    
        });
    
        await connection.query(
            `CREATE DATABASE IF NOT EXISTS ${databaseConfig.database}`
    
        );
    
        await connection.end();
    
        console.log("Database created, comemora que não deu erro")  
    }catch (erro){
        console.log(`error creating database: ${error}`)

    }


    }


createDatabase();

// Comando para criar seus bancos de dados e deixar tudo padronizado 