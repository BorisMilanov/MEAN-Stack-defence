import express from 'express';

import { createRole ,getAllRoles, deleteRole} from "../controllers/role.controller.js";
const router = express.Router();

router.post('/create',createRole);

router.get('/getAll',getAllRoles);

router.delete('/deleteRole/:id', deleteRole);

export default router;