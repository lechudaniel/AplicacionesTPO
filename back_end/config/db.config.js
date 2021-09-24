module.exports =  {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
};