import { log } from "console";
import mongoose from "mongoose";

type ConnectionObject ={
    isConnected?:number
    // ? means its optional but if its return its type will be number 
}

const connection : ConnectionObject = {}

async function dbConnect():Promise<void>{
// mongoose allow multiple db connections but it is not the optimized way , so we need to check if the db is alredy connectd or not 
// in next js the db only connect when a request arrives , not connected all the time 
    if(connection.isConnected){
        console.log("Already Connected To DataBase");
        return 
    
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{})
        
        connection.isConnected = db.connections[0].readyState 
        
        console.log("DB Connected SuccessFully");
        
    }
    catch(error){
        console.log("Database Connection Failed",error);
        
        process.exit(1)
    }

}


export default dbConnect;
