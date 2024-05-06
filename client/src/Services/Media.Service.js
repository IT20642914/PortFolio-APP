import { axiosPrivateInstance } from "."

const getAllMedia = () => {
    return axiosPrivateInstance.get(`media`);
}
const getImagePath = (content) => {
    return axiosPrivateInstance.get(`${content}`);
}

export const MediaService = {
    getAllMedia,
    getImagePath
}