const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conectar ou criar o banco de dados (um arquivo .db)
const dbPath = path.join(__dirname, 'scores.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao SQLite:', err);
    } else {
        console.log('Conectado ao SQLite com sucesso!');
    }
});

// Criar a tabela Scores
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Scores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            time INTEGER NOT NULL,
            date_added DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;