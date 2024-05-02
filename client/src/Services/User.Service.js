import { axiosPrivateInstance } from "."

const Login = (payload) => {
    return axiosPrivateInstance.post(`/api/user/login`,payload);
}

const Register = (payload) => {

    return axiosPrivateInstance.post(`/api/user/register`,payload);
}

export const UserService = {
    Login,
    Register
}