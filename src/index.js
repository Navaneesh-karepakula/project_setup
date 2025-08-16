// require("dotenv").config({path:"../.env"})
import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import connectdb from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectdb()



















/*
import express from "express"
const app=express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on((error)=>{
            console.log("error:",error)
            throw new error
        })
        app.listen(process.env.port,()=>{
            console.log(`server is listening on ${process.env.port}`)
        })
    } catch (error) {
        console.error("error:",error)
        throw err;
    }
})()
    */