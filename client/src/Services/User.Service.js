import { axiosPrivateInstance } from "."

const Login = (payload) => {
    return axiosPrivateInstance.post(`/api/user/login`,payload);
}