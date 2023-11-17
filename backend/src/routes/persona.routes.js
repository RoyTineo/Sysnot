import { Router } from "express"
import {getPersonas,postPersonas,deletePersona,updatePersonas, getPersonaID} from '../controllers/personas.controllers.js';

const router = Router ();

router.get("/personas", getPersonas );
router.get("/personas/:id", getPersonaID);
router.post("/personas", postPersonas);
router.delete("/personas/:id", deletePersona);
router.patch("/personas/:id", updatePersonas);


export default router;