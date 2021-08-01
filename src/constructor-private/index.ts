// Singleton
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private username: string,
    private password: string,
  ) {}

  connect(): void {
    console.log('Conectado');
  }

  static getDatabase(
    host: string,
    username: string,
    password: string,
  ): Database {
    if (Database.database) {
      console.log('retornando instancia ja criada');
      return Database.database;
    }
    console.log('criando nova instancia');
    Database.database = new Database(host, username, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123');
const db2 = Database.getDatabase('localhost', 'root', '123');
db1.connect();
console.log(db1 === db2);
