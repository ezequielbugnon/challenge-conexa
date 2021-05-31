import mongoose from 'mongoose';
import {CONEXION} from '../config'

const connexion = async () => {
    try {
        await mongoose.connect(CONEXION,{
            useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false,
            useCreateIndex: true
        });
        console.info(`Connected to database on Worker process: ${process.pid}`)
    } catch (error) {
        console.error(`Connection error: ${error.stack} on Worker process: ${process.pid}`)
        process.exit(1)
    }
}

export default connexion;