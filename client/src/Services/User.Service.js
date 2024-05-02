import { axiosPrivateInstance } from "."

const Login = (payload) => {
    return axiosPrivateInstance.post(`/api/user/login`,payload);
}

const Register = (payload) => {

    return axiosPrivateInstance.post(`/api/user/register`,payload);
}
const getAllUsers = () => {
    return axiosPrivateInstance.get(`/api/user/users`);
}

const getUserById = (id) => {
    return axiosPrivateInstance.get(`/api/user/?id=${id}`);
}
const updateUser = (id,payload) => {
    return axiosPrivateInstance.put(`/api/user/?id=${id}`,payload);
}
export const UserService = {
    Login,
    Register,
    getAllUsers,
    getUserById,
    updateUser
}