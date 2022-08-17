import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:123@livraria.pqgxdkm.mongodb.net/Livraria");

let db = mongoose.connection;

export default db;

