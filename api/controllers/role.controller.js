import Role from '../models/Role.js';
export const createRole = async (req, res, next) => {
    try {
        if (req.body.body && req.body.role !== '') {
            const newRole = new Role(req.body);
            await newRole.save();
            return res.send("Role Created!");
        } else {
            return res.status(400).send("Bad Request");
        }

    } catch (error) {
        return res.status(500).send("Internal Server Error!");
    }
}

export const getAllRoles = async (req, res, next) => {
    try {
        const roles = await Role.find({});
        return res.status(200).send(roles);
    } catch (error) {
        return res.status(500).send("Internal Server Error!");
    }
}

export const deleteRole = async (req, res , next) => {
    try {
        const roleId = req.params.id;
        const role = await Role.findById({_id: roleId});
        if (role) {
            await Role.findByIdAndDelete(roleId);
            return res.status(200).send("Role deleted!");
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error!");
    }
}