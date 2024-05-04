import { axiosPrivateInstance } from "."

const addFeedBack = (payload) => {
    return axiosPrivateInstance.post(`/api/feedbacks/feedback`,payload);
}
const getAllFeedBack = () => {
    return axiosPrivateInstance.get(`/api/feedbacks/feedback`);
}
const updateSpecificFeedBack = (feedbackId,detailId,payload) => {
    return axiosPrivateInstance.patch(`/api/feedbacks/feedback/update?feedbackId=${feedbackId}&detailId=${detailId}`,payload);
}
const deleteSpecificFeedBack = (feedbackId,detailId) => {
    return axiosPrivateInstance.delete(`/api/feedbacks/feedback/delete?feedbackId=${feedbackId}&detailId=${detailId}`);
}
const generateFeedbackReport = () => {
    return axiosPrivateInstance.get(`/api/feedbacks/generate-report`);
}

export const FeedBackService = {
    addFeedBack,
    getAllFeedBack,
    updateSpecificFeedBack,
    deleteSpecificFeedBack,
    generateFeedbackReport
}