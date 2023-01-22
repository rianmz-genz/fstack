import express from "express";
import {getUser} from "../Controller/UserControler.js"
const router = express.Router()

router.get('/users', getUser)

export default router