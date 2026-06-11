import { db } from "./db/index.js";
import { usersTable, type InsertUser } from "./drizzle/schema.js";
import dotenv from "dotenv"
dotenv.config()

async function createUser(user:InsertUser) {

    await db.insert(usersTable).values(user)
    
}

async function getAllUsers(){
    const users = await db.select().from(usersTable)
    console.log("USERS IN DB======",users)
    return users
}

createUser({name:"Ankit", age: 20 ,email:"ankit@gmail.com"})
createUser({name:"Ankit12", age: 20 ,email:"ankit12@gmail.com"})
createUser({name:"Ankit34", age: 20 ,email:"ankit34@gmail.com"})