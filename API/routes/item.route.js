import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {createItem} from '../controllers/item.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createItem);
