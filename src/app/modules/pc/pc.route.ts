import express from 'express' 
import { PCController } from './pc.controller'
const router = express.Router()

 
router.get('/', PCController.getAll) 
router.post('/create', PCController.createPc) 


export const PcRoutes = router
