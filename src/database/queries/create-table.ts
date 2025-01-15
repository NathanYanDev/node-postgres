import { sql } from "../models/db";

sql`
    CREATE TABLE videos(
        id          TEXT PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`.then(() => console.log("Tabela criada"));
