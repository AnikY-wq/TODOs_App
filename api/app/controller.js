import { addUserService, getUsersService } from "./service.js";

export const getUsers = async (req, res) => {
    const { id } = req.query;
    const users = await getUsersService({ id });
    return res.json(users);
}

export const addUser = async (req, res) => {
    const user = {
        name: "john doe",
        pwd: "jdpwd@123"
    }
    const result = await addUserService({ user })
    return res.json(result)

}