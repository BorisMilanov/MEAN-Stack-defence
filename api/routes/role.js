
import express from 'express';

import { createRole ,getAllRoles, deleteRole} from "../controllers/role.controller.js";
import Role from '../models/Role.js';
const router = express.Router();

router.post('/create', createRole);

router.get('/getAll',getAllRoles);

router.delete('/deleteRole/:id', deleteRole);
// router.put('/update/:id', async (req,res, next)=>{
//     try {
//         const role = await Role.findById({_id: req.params.id})
//         if (role){
//             const newDate  = await Role.findByIdAndUpdate(
//                 req.params.id,
//                 {$set: req.body},
//                 {new:true}
//             )
//             return res.status(200).send("Role Updated!")
//         }else{
//             return res.status(500).send("Internal Server Error")
//         }
//     } catch (error) {
        
//     }
// })
export default router;