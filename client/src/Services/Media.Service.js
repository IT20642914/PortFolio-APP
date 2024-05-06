import { axiosPrivateInstance } from "."

const getAllMedia = () => {
    return axiosPrivateInstance.get(`media`);
}

const AddMedia = (data) => {
    return axiosPrivateInstance.post('media/add', data);
}
const DeleteMedia = (id) => {
    return axiosPrivateInstance.delete(`media/delete/${id}`);

}
const UpdateMedia = (id, data) => {
    return axiosPrivateInstance.put(`media/update/${id}`, data);

}
const GetMedia = (id) => {
    return axiosPrivateInstance.get(`media/get/${id}`);
}
const getReportMedia = () => {
    return axiosPrivateInstance.get(`media/report`);
}
export const MediaService = {
    getAllMedia,
    AddMedia,
    DeleteMedia,
    UpdateMedia,
    GetMedia,
    getReportMedia
}